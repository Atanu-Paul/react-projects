// import the react and reactdom libaries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
// 2 type of react components are class component and function component
// we are creating a function react componet

// function getButtonText() {
//   return "TEXT COMING FROM getButtonText()";
// }

const App = () => {
  const buttonText = { test: "123" }; //this is a variable with a text which can be shown on a button which can be send in the button tag
  const button_style={ backgroundColor: "green", color: "white" }
  return (
    <div>
      <lable className="lable" for="name">
        Enter Name:{" "}
      </lable>
      <input id="name" type="text" />
      <button style={button_style}>
        {buttonText.test}
      </button>
    </div>
  );
};
// take the react component and show it on webpage
ReactDOM.render(<App />, document.querySelector("#root"));
