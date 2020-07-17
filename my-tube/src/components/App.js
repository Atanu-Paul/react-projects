import React, { Component } from "react";
import Navbar from "./navbar";
// import Footer from "./footer";
import youTubeAPI from "../apis/youTubeAPI";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import { KEY } from "../configs/API-KEYS";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("videos");
  }

  onTermSubmit = async (term) => {
    const response = await youTubeAPI.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: KEY,
      },
    });
    console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log("App.js function", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navbar />
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
        {/*        <Footer />*/}
      </div>
    );
  }
}

export default App;
