import React from "react";
import Images from "./Images";
import PropTypes from "prop-types";

const Item = ({ Query }) => {
  return (
    <div>
      <h2>{Query} Pictures</h2>
      <Images Query={Query} />
    </div>
  );
};
Item.propTypes = {
  Query: PropTypes.string.isRequired
};

export default Item;
