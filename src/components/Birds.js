import React from "react";
import Images from "./Images";
import PropTypes from "prop-types";

const Birds = ({ Query }) => {
  return (
    <div>
      <h2>{Query} Pictures</h2>
      <Images Query={Query} />
    </div>
  );
};
Birds.propTypes = {
  Query: PropTypes.string.isRequired
};

export default Birds;
