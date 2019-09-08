import axios from "axios";

export async function fetchData({ URL, stateDescription, component }) {
  try {
    let response = await axios.get(URL, {
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
