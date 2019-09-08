import React from "react";
import JokeElementText from "./JokeElementText/JokeElementText";
import Button from "../../__atoms/Button/Button";

const JokeElement = ({ isFavorite, deleteJoke, addToFavorites, joke }) => {
  const displayButtons = isFavorite ? (
    <Button
      iconClasses="far fa-star"
      addToFavorites={addToFavorites}
      joke={joke}
    />
  ) : null;
  return (
    <div className="joke bg-white my-6 p-4 rounded-lg">
      <div className="row">
        <div className="col-12 text-right mb-2">
          <div>
            <Button
              iconClasses="fas fa-times"
              isFavorite={isFavorite}
              deleteJoke={deleteJoke}
              joke={joke}
            />

            {displayButtons}
          </div>
        </div>

        <div className="col-12">
          <JokeElementText text={joke.joke} />
        </div>
      </div>
    </div>
  );
};

export default JokeElement;
