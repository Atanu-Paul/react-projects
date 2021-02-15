import React from "react";

export const Button = (props) => {
  const funcCounter = () => {
    props.sign == "+" ? props.updateCount(1) : props.updateCount(-1);
  };

  return <button onClick={funcCounter()}>{props.sign}</button>;
};
