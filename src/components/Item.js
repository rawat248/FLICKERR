import React from "react";
import Images from "./Images";
import PropTypes from "prop-types";

const Item = ({ Search }) => {
  return (
    <div>
      <h2>{Search} Pictures</h2>
      <Images Search={Search} />
    </div>
  );
};
Item.propTypes = {
  Search: PropTypes.string.isRequired
};

export default Item;
