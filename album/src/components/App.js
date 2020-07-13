import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Home from "./HomePage";
import Banner from "./Banner";

//try to render image on key press i.e when the letter u is pressed find the images with the letter u so with each key press a new reender should happen.
//problem now is that onChange event works but the first change is not getting recorder i.e
//the value is picked as an empty string
class App extends Component {
  state = { img: [], shouldHide: null };

  onSearchSubmit = async (term, isclicked) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response.data.results);
    this.setState({ img: response.data.results });
    if (isclicked === true) {
      this.setState({ shouldHide: "none" });
    } else {
      this.setState({ shouldHide: null });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Banner shouldHide={this.state.shouldHide} />
        <Home shouldHide={this.state.shouldHide} />
        <ImageList images={this.state.img} />
      </div>
    );
  }
}

export default App;
