import React from "react";

const Button = (
  props,
  { text, iconClasses, buttonClasses, deleteJoke, addToFavorites, joke, jokeID }
) => {
  console.log(props);
  const displayText = text ? text : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        if (addToFavorites) {
          addToFavorites(joke, jokeID);
        } else {
          deleteJoke(jokeID);
        }
      }}
    >
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
