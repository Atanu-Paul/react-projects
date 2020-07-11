import React from "react";

const ErrorMessage = (props) => {
  return (
    <div class="ui negative message">
      <i class="close icon"></i>
      <div class="header">Error:  {props.message}</div>
    </div>
  );
};

ErrorMessage.defaultProps = {
  message: "Server Error",
};

export default ErrorMessage;
