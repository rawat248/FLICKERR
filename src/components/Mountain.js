import React from "react";
<<<<<<< HEAD
import "./Mountain.css";
import mountainImage from "../assets/p1.jpeg";
import mountainImage1 from "../assets/p2.jpeg";
import mountainImage2 from "../assets/p3.jpeg";
import mountainImage3 from "../assets/p4.jpeg";
import mountainImage4 from "../assets/p5.jpeg";
import mountainImage5 from "../assets/p6.jpeg";

const Mountain = () => {
  return (
    <div>
      <h2>Mountain Pictures</h2>
      <div className="portrait">
        <div className="wrapper">
          <img src={mountainImage} alt="Mountain image"></img>
        </div>
        <div className="wrapper">
          <img src={mountainImage1} alt="Mountain image"></img>
        </div>
        <div className="wrapper">
          <img src={mountainImage2} alt="Mountain image"></img>
        </div>
        <div className="wrapper">
          <img src={mountainImage3} alt="Mountain image"></img>
        </div>
        <div className="wrapper">
          <img src={mountainImage4} alt="Mountain image"></img>
        </div>
        <div className="wrapper">
          <img src={mountainImage5} alt="Mountain image"></img>
        </div>
      </div>
    </div>
  );
=======
import Images from "./Images";
import PropTypes from "prop-types";

const Mountain = ({ Query }) => {
  return (
    <div>
      <h2>{Query} Pictures</h2>
      <Images Query={Query} />
    </div>
  );
};
Mountain.propTypes = {
  Query: PropTypes.string.isRequired
>>>>>>> 07d0d9f2efc0c5822eb5f6cbc1885b91ba1e5f42
};

export default Mountain;
