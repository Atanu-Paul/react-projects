import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "ITS SO HOTTTT!!!",
    iconName: "sun",
  },
  winter: { text: "DAMM ITS COLD!!!!", iconName: "snowflake" },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season === "winter" ? "DAMM ITS COLD!!!!" : "ITS SO HOTTTT!!!";
  // const icon = season === "winter" ? "snowflake" : "sun";
  // console.log(season);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
