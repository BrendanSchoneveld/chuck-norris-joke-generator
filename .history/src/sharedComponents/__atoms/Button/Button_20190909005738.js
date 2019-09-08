import React from "react";

const Button = ({
  text,
  iconClasses,
  buttonClasses,
  deleteJoke,
  addToFavorites,
  fetchData,
  isFavorite,
  joke
}) => {
  console.log(isFavorite);
  const displayText = text ? text : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button
      type="button"
      className="btn btn-primary ml-1"
      onClick={() => {
        if (addToFavorites) {
          addToFavorites(joke, joke.id);
        } else if (fetchData) {
          const fetchParams = {
            URL: "https://api.icndb.com/jokes/random/10"
          };

          fetchData(fetchParams);
        } else {
          deleteJoke(joke.id, isFavorite);
        }
      }}
    >
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
