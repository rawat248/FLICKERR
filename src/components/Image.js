import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Images1 = ({ url }) => {
  return (
    <div className="wrapper">
      <img src={url}></img>
    </div>
  );
};
Images1.propTypes = {
  url: PropTypes.string.isRequired
};
export default Images1;
