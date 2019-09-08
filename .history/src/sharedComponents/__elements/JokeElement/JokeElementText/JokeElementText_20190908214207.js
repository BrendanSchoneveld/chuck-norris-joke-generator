import React from "react";

const JokeElementText = ({ text }) => {
  /*
   *  Display joke if props.text has content
   */
  const displayText = text ? text : null;
  return <p>{displayText}</p>;
};

export default JokeElementText;
