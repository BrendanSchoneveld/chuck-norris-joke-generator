import React, { Component } from "react";
import axios from "axios";
import JokeElement from "../../sharedComponents/__elements/JokeElement/JokeElement";
import Button from "../../sharedComponents/__atoms/Button/Button";

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };

  fetchData = ({ URL }) => {
    try {
      let response = axios.get(URL, {
        headers: {}
      });
      let { data } = response;

      this.setState({
        jokes: [...data.value]
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    /* const fetchParams = {
      URL: "https://api.icndb.com/jokes/random/10",
      stateDescription: "jokes",
      component: this
    };

    this.fetchData(fetchParams); */
  }

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

  deleteJoke = id => {
    const { jokes, favorites } = this.state,
      newJokesList = jokes.filter(joke => {
        return joke.id !== id;
      });

    this.setState({ jokes: [...newJokesList] });
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
          return <JokeElement key={id} joke={joke} isFavorite={true} />;
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
