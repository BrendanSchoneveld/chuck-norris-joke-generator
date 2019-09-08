import React, { Component } from "react";

import fetchData from "../../services/fetchData";

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };

  componentDidMount() {
    const fetchParams = {
      URL: "",
      stateDescription: "jokes",
      component: this
    };

    fetchData(fetchParams);
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
