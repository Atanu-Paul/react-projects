import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    //in a class component we have to write this.props to pass a prop where as in a fucntional
    //component we just use the term prpos.
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field" style={{ display: "flex" }}>
            <input
              type="text"
              defaultValue={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search for Images"
            />
            &nbsp;&nbsp;&nbsp;
            <button
              className="ui labeled icon button"
              onSubmit={this.onFormSubmit}
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
