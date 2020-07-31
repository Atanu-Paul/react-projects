import React, { Component } from "react";
import axios from "axios";
// import List from "./components/List";

class App extends Component {
  state = { users: [] };

  onHandleClick = async () => {
    const res = await axios.get("http://localhost:8080/");
    console.log(res);
    this.setState({ users: res.data });
  };
  //_id,address email first_name gender last_name
  renderList = () => {
    const list = this.state.users.map((userList) =>
      console.log(
        "id:",
        userList._id,
        "email:",
        userList.email,
        "Name:",
        userList.first_name,
        userList.last_name,
        "Gender:",
        userList.gender
      )
    );
    return list;
  };
  render() {
    return (
      <div>
        <button onClick={this.onHandleClick}>Fetch</button>
        <button onClick={this.renderList}>Show</button>
      </div>
    );
  }
}

export default App;
