import React from "react";
import JokeElementText from "./JokeElementText/JokeElementText";
import Button from "../../__atoms/Button/Button";

const JokeElement = ({ isFavorite, deleteJoke, addToFavorites, joke }) => {
  console.log(joke);
  const displayButtons = isFavorite ? (
    <Button
      iconClasses="fas fa-times"
      deleteJoke={deleteJoke}
      jokeID={joke.id}
    />
  ) : (
    <div>
      <Button
        iconClasses="fas fa-times"
        deleteJoke={deleteJoke}
        jokeID={joke.id}
      />
      <Button
        iconClasses="far fa-star"
        addToFavorites={addToFavorites}
        joke={joke}
        jokeID={joke.id}
      />
    </div>
  );
  return (
    <div className="joke bg-white my-6 p-4 rounded-lg">
      <div className="row">
        <div className="col-12 col-sm-7 col-md-8 col-lg-9">
          <JokeElementText text={joke.joke} />
        </div>

        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
          {displayButtons}
        </div>
      </div>
    </div>
  );
};

export default JokeElement;
