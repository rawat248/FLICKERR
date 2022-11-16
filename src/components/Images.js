import React, { useContext, useEffect } from "react";
import { Image } from "../Data/Data";
import Picture from "./Picture";
import PropTypes from "prop-types";

const Images = ({ Search }) => {
  const { state, getData } = useContext(Image);
  useEffect(() => {
    getData(Search);
  }, [Search]);

  return (
    <div>
      <Picture data={state} />
    </div>
  );
};
Images.propTypes = {
  Search: PropTypes.string.isRequired
};
export default Images;
