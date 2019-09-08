import React, { Component } from "react";
import axios from "axios";
import JokeElement from "../../sharedComponents/__elements/JokeElement/JokeElement";

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };

  async fetchData({ URL, stateDescription, component }) {
    try {
      let response = await axios.get(URL, {
        headers: {}
      });
      let { data } = response;

      component.setState({
        [stateDescription]: [...data.value]
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    const fetchParams = {
      URL: "https://api.icndb.com/jokes/random/10",
      stateDescription: "jokes",
      component: this
    };

    this.fetchData(fetchParams);
  }

  addToFavorites = (joke, id) => {
    const { jokes } = this.state,
      // Filter the joke out of the jokesList
      addJoke = jokes.filter(joke => {
        return joke.id !== id;
      });

    this.deleteJoke(id);

    // Add the new joke to the favorites list and update the state
    this.setState({
      favorites: [...this.state.favorites, joke],
      addJoke
    });
  };

  deleteJoke = id => {
    const { jokes } = this.state,
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
      ? jokes.map(({ id, joke }) => {
          return (
            <JokeElement
              key={id}
              id={id}
              text={joke}
              isFavorite={false}
              deleteJoke={this.deleteJoke}
            />
          );
        })
      : [];
    /*
     *
     */
    const displayFavorites = favorites.length
      ? favorites.map(({ id, joke }) => {
          return <JokeElement key={id} id={id} text={joke} isFavorite={true} />;
        })
      : [];
    return (
      <div className="container py-10">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5 my-4 jokes-wrapper">
            {displayJokes}
          </div>

          <div className="col-12 col-sm-6 col-lg-5 offset-lg-5 my-4 jokes-wrapper">
            {displayFavorites}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
