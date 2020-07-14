import React from "react";
import "../styles/Menu.css";
// import SearchBar from "./SearchBar";

const Menu = () => (
  <div className="Menu">
    <a className="active" href="#home">
      Home
    </a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    {/*<div className="SearchBar"><SearchBar /></div>*/}
  </div>
);
export default Menu;
