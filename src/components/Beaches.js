import React from "react";
import Images from "./Images";
import PropTypes from "prop-types";

const Beaches = ({ Query }) => {
  return (
    <div>
      <h2>{Query} Pictures</h2>
      <Images Query={Query} />
    </div>
  );
};
Beaches.propTypes = {
  Query: PropTypes.string.isRequired
};

export default Beaches;
