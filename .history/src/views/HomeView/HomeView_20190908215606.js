import React, { Component } from "react";

import fetchData from '../../services/fetchData';

class HomeView extends Component {
  state = {
    jokes: [],
    favorites: []
  };

  componentDidMount () {
      const fetchParams = {

      }

      import axios from "axios";

/* export async function fetchData(URL, stateDescription, component) {
  try {
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    component.setState({
      [stateDescription]: { data }
    });
  } catch (error) {
    console.error(error);
  }
} */

export default async function fetchData({
  endpoint,
  format,
  units,
  origins,
  destinations,
  mode,
  language,
  API_KEY,
  stateDescription,
  component
}) {
  let displayFormat = format ? format : null,
    displayUnits = units ? `?units=${units}` : null,
    displayMode = mode ? `&mode=${mode}` : null,
    displayLanguage = language ? `&language=${language}` : null;
  const URL = `${endpoint}${displayFormat}${displayUnits}&origins=${origins}&destinations=${destinations}${displayMode}${displayLanguage}&key=${API_KEY}`;
  try {
    let response = await axios.get(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    let { data } = response;

    component.setState({
      [stateDescription]: [...data]
    });
  } catch (error) {
    console.error(error);
  }
}

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
