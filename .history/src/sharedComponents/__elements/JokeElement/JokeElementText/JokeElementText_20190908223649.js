import React from "react";

const JokeElementText = ({ text }) => {
  const displayText = text ? text : null;
  return <p className="text-left">{displayText}</p>;
};

export default JokeElementText;
