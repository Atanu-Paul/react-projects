import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import ErrorMessage from "./Error";

class App extends Component {
  // constructor(props) { // the old way of doing state setting
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }
  state = { lat: null, errorMessage: "" }; //the new way of state setting
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContentHelper() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMessage message={this.state.errorMessage} />;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Accessing your location" />;
  }
  render() {
    return <div className="contentBody">{this.renderContentHelper()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
