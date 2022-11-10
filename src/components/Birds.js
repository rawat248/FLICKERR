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
      <div className="image">
        <img src={mountainImage} alt="Birds image"></img>
        <img src={mountainImage1} alt="Birds image"></img>
        <img src={mountainImage2} alt="Birds image"></img>
        <img src={mountainImage3} alt="Birds image"></img>
        <img src={mountainImage4} alt="Birds image"></img>
        <img src={mountainImage5} alt="Birds image"></img>
      </div>
    </div>
  );
};

export default Birds;
