import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//try to render image on key press i.e when the letter u is pressed find the images with the letter u so with each key press a new reender should happen.
//problem now is that onChange event works but the first change is not getting recorder i.e
//the value is picked as an empty string
class App extends Component {
  state = { img: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID EgSP0zxWhLAAqd3OVtWFL6JNN3vNiLVYPSVlFkUJqRo",
      },
    });
    // console.log(response.data.results);
    this.setState({ img: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Number of images :{this.state.img.length}
      </div>
    );
  }
}

export default App;
