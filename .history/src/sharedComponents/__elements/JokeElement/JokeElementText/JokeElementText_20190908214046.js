import React from "react";

const JokeElementText = ({ text }) => {
  const displayText = text ? text : null;
  return <p>{displayText}</p>;
};

export default JokeElementText;
