import React, { Component } from "react";
import axios from "axios";
import JokeElement from "../../sharedComponents/__elements/JokeElement/JokeElement";
import Button from "../../sharedComponents/__atoms/Button/Button";

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };

  /*
   *
   */
  fetchData = async ({ URL }) => {
    try {
      let response = await fetch(URL);
      let data = await response.json();

      this.setState({
        jokes: [...this.state.jokes, ...data.value]
      });
    } catch (error) {
      console.log(error);
    }
  };

  /*
   *
   */
  addToFavorites = (joke, id) => {
    const { jokes, favorites } = this.state,
      // Filter the joke out of the jokesList
      addJoke = jokes.filter(joke => {
        this.deleteJoke(id);
        return joke.id !== id;
      });

    // Add the new joke to the favorites list and update the state
    this.setState({
      favorites: [...favorites, joke],
      addJoke
    });
  };

  /*
   *
   */
  deleteJoke = (id, isFavorite) => {
    const { jokes, favorites } = this.state;

    if (!isFavorite) {
      let newJokesList = jokes.filter(joke => {
        return joke.id !== id;
      });

      this.setState({ jokes: [...newJokesList] });
    } else {
      let newJokesList = favorites.filter(joke => {
        return joke.id !== id;
      });

      this.setState({ favorites: [...newJokesList] });
    }
  };

  /*
   *
   */
  componentDidMount() {
    // this.fetchLocalStorageHistory();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    /* window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    ); */
  }

  componentWillUnmount() {
    /* window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    ); */

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  fetchLocalStorageHistory() {
    // for all items in state
    for (let key in this.state) {
      if (key === "favorites") {
        // if the key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
          // get the key's value from localStorage
          let value = localStorage.getItem(key);

          // parse the localStorage string and setState
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            // handle empty string
            this.setState({ [key]: value });
          }
        }
      }
    }
  }

  saveStateToLocalStorage = () => {
    // Sla data alleen op voor de 'favorites' lijst
    for (let key in this.state) {
      if (key === "favorites") {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  };

  render() {
    const { jokes, favorites } = this.state;

    /*
     *
     */
    const displayJokes = jokes.length
      ? jokes.map(joke => {
          const { id } = joke;
          return (
            <JokeElement
              key={id}
              joke={joke}
              isFavorite={false}
              deleteJoke={this.deleteJoke}
              addToFavorites={this.addToFavorites}
            />
          );
        })
      : [];
    /*
     *
     */
    const displayFavorites = favorites.length
      ? favorites.map(joke => {
          const { id } = joke;
          return (
            <JokeElement
              key={id}
              joke={joke}
              isFavorite={true}
              deleteJoke={this.deleteJoke}
            />
          );
        })
      : [];
    return (
      <div className="container py-10">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5 my-4 jokes-wrapper">
            {displayJokes}
          </div>

          <div className="col-12 col-sm-6 col-lg-5 offset-lg-2 my-4 jokes-wrapper">
            {displayFavorites}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button text="Wanna hear a joke?" fetchData={this.fetchData} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
