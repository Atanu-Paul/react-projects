import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class Home extends Component {
  state = { homeImg: [] };

  async componentDidMount() {
    const response = await unsplash.get("/photos");
    // console.log(response.data);
    this.setState({ homeImg: response.data });
  }

  render() {
    return (
      <div style={{ display: this.props.shouldHide }}>
        <ImageList images={this.state.homeImg} />
      </div>
    );
  }
}

export default Home;
