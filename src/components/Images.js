import React, { useContext, useEffect } from "react";
// import React, { useEffect } from "react";
import { Image } from "../Data/Data";
import Picture from "./Picture";
import PropTypes from "prop-types";

const Images = ({ Query }) => {
  const { state, getData } = useContext(Image);
  useEffect(() => {
    getData(Query);
  }, [Query]);

  return (
    <div>
      <Picture data={state} />
    </div>
  );
};
Images.propTypes = {
  Query: PropTypes.string.isRequired
};
export default Images;
