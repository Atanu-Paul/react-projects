// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Button } from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  // handleCount(value) {
  //   this.setState((prevState) => ({ count: prevState.count + value }));
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter App</h1>
          <hr />
          Current Count: {this.state.count}
          <hr />
          <Button
            sign="+"
            count={this.state.count}
            updateCount={this.handleCount.bind(this)}
          />
          <Button
            sign="-"
            count={this.state.count}
            updateCount={this.handleCount.bind(this)}
          />
        </header>
      </div>
    );
  }
}

export default App;
