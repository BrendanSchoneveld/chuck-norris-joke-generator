import React from "react";

const Button = ({
  text,
  iconClasses,
  buttonClasses,
  deleteJoke,
  addToFavorites,
  fetchData,
  joke
}) => {
  const displayText = text ? text : null,
    insertOnClickEvents = () => {
      return () => {
        if (addToFavorites) {
          addToFavorites(joke, joke.id);
        } else if (fetchData) {
          const fetchParams = {
            URL: "https://api.icndb.com/jokes/random/10"
          };

          fetchData(fetchParams);
        } else {
          deleteJoke(joke.id);
        }
      };
    },
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={insertOnClickEvents}
    >
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
