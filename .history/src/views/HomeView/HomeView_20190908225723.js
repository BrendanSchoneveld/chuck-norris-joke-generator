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

  deleteJoke(id) {
    // Filter de 'joke' uit de favorietenlijst
    const jokes = this.state.jokes.filter(joke => {
      return joke.id !== id;
    });

    this.setState({ jokes });
  }

  render() {
    const { jokes, favorites } = this.state;

    const displayJokes = jokes.length
      ? jokes.map(({ id, joke }) => {
          return <JokeElement key={id} text={joke} isFavorite={false} />;
        })
      : [];
    const displayFavorites = favorites.length
      ? favorites.map(({ id, joke }) => {
          return <JokeElement key={id} text={joke} isFavorite={true} />;
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
