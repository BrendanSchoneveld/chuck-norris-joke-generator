import React from "react";

const Button = ({
  text,
  iconClasses,
  buttonClasses,
  deleteJoke,
  addToFavorites,
  joke
}) => {
  const displayText = text ? text : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        if (addToFavorites) {
          addToFavorites(joke, joke.id);
        } else {
          deleteJoke(joke.id);
        }
      }}
    >
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
