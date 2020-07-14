import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import youTubeAPI from "../apis/youTubeAPI";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const KEY = ""; //remmber to paste the api key. Get it from the apiKey.js file COPY PASTE NOT IMPORT later we will move it to env varialbles
    const response = await youTubeAPI.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navbar />
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.videos.length} videos
        <Footer />
      </div>
    );
  }
}

export default App;

// onTermSubmit = async term => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//       part: "snippet",
//       maxResults: 5,
//       type: 'video',
//       key: KEY
//     }
//   });
