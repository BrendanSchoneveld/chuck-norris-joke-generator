import React from "react";

const Button = ({
  text,
  iconClasses,
  buttonClasses,
  deleteJoke,
  addToFavorites,
  jokeID
}) => {
  const displayText = text ? text : null,
    displayAddToFavorites = addToFavorites
      ? addToFavorites(text, jokeID)
      : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        deleteJoke(jokeID);
        addToFavorites(text, jokeID);
      }}
    >
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
