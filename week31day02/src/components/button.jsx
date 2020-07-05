import React from "react";
import "../styles/Button.css";

const Button = ({ value, type }) => (
  <input type={type} value={value} className="Button" />
);

export default Button;
