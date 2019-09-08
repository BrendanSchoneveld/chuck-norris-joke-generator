import React, { Component } from "react";

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };
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
