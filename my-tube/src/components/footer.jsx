import React from "react";
import "../styles/Footer.css";
import { Component } from "react";
class Footer extends Component {
  showyear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  render() {
    return (
      <footer className="Footer">
        <p>Copyrights &copy;{this.showyear()} Atanu Paul </p>
      </footer>
    );
  }
}

export default Footer;
