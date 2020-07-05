import React from "react";
import Input from "./input";
import Button from "./button";
import "../styles/Login.css";

const Login = () => (
  <form className="Login">
    <Input
      inputProps={{
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      }}
    ></Input>
    <Input
      inputProps={{
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
      }}
    ></Input>
    <Button type="submit" value="Login"></Button>
  </form>
);

export default Login;
