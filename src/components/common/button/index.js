import React from "react";
import "./button.css";
const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`flex absolute-centre button-wrapper ${customClass}`}
      onClick={onClick}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
