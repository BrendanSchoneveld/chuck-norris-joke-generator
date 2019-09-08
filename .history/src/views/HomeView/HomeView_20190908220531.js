import React, { Component } from "react";
import axios from "axios";

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
        [stateDescription]: [...data]
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5"></div>

          <div className="col-12 col-sm-6 col-lg-5 offset-lg-5"></div>
        </div>
      </div>
    );
  }
}

export default HomeView;
