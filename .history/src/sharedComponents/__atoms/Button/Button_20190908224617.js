import React from "react";

const Button = ({ text, iconClasses, buttonClasses }) => {
  const displayText = text ? text : null,
    displayButtonClasses = buttonClasses ? buttonClasses : null,
    displayIcon = iconClasses ? <i className={iconClasses}></i> : null;
  return (
    <button type="button" className="btn btn-primary">
      {displayText}

      {displayIcon}
    </button>
  );
};

export default Button;
