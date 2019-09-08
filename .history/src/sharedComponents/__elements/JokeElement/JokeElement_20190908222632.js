import React from "react";
import JokeElementText from "./JokeElementText/JokeElementText";
import Button from "../../__atoms/Button/Button";

const JokeElement = ({ text }) => {
  return (
    <div className="joke bg-white my-6">
      <div className="row">
        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
          <JokeElementText text={text} />
        </div>

        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
          <Button />

          <Button />
        </div>
      </div>
    </div>
  );
};

export default JokeElement;
