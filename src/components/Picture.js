import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const Picture = (props) => {
  const newImage = props.data;
  const result = newImage.map((image) => {
    const farm = image.farm;
    const server = image.server;
    const id = image.id;
    const secret = image.secret;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <Image url={url} key={id} />;
  });

  return <div className="portrait">{result}</div>;
};
Picture.propTypes = {
  data: PropTypes.string.isRequired
};
export default Picture;
