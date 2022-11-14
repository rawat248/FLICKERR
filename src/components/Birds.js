import React from "react";
import "./Mountain.css";
import mountainImage from "../assets/p1.jpeg";
import mountainImage1 from "../assets/p2.jpeg";
import mountainImage2 from "../assets/p3.jpeg";
import mountainImage3 from "../assets/p4.jpeg";
import mountainImage4 from "../assets/p5.jpeg";
import mountainImage5 from "../assets/p6.jpeg";

const Birds = () => {
  return (
    <div>
      <h2>Birds Pictures</h2>
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
};

export default Birds;
