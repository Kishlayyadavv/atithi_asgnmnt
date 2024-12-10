// import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
function Button({ text,  onClick }) {
  return (
    <button
      className="custom-button "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
