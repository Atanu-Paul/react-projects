import React, { Component } from "react";
import '../styles/SearchBar.css'
class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div
        className="ui segment search-bar"
        style={{ backgroundColor: "transparent" }}
      >
        <form className="ui form" onSubmit={this.onFormSubmmit}>
          <div className="field" style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Search Videos"
              defaultValue={this.state.term}
              onChange={this.onInputChange}
            />
            &nbsp;&nbsp;&nbsp;
            <button
              className="ui labeled icon button"
              onSubmit={this.onFormSubmmit}
            >
              <i className="searchengin icon" style={{ fontSize: "20px" }}></i>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
