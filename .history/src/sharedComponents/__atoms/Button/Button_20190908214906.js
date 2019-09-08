import React from "react";

const Button = ({ text, iconClasses, buttonClasses }) => {
  const displayText = text ? text : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button className={displayButtonClasses}>
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
