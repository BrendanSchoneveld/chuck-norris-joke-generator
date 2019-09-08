import React from "react";
import JokeElementText from "./JokeElementText/JokeElementText";
import Button from "../../__atoms/Button/Button";

const JokeElement = ({ text }) => {
  return (
    <div className="joke bg-white my-6 p-4">
      <div className="row">
        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
          <JokeElementText text={text} />
        </div>

        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
          <Button />

          <Button />
        </div>
      </div>
    </div>
  );
};

export default JokeElement;
