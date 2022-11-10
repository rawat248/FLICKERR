import React from "react";
import "./Mountain.css";
import mountainImage from "../assets/p1.jpeg";
import mountainImage1 from "../assets/p2.jpeg";
import mountainImage2 from "../assets/p3.jpeg";
import mountainImage3 from "../assets/p4.jpeg";
import mountainImage4 from "../assets/p5.jpeg";
import mountainImage5 from "../assets/p6.jpeg";

const Food = () => {
  const setInput = "Food";
  return (
    <div>
      <h2>{setInput} Pictures</h2>
      <div className="image">
        <img src={mountainImage} alt="a table full of delicious food"></img>
        <img src={mountainImage1} alt="a table full of delicious food"></img>
        <img src={mountainImage2} alt="a table full of delicious food"></img>
        <img src={mountainImage3} alt="a table full of delicious food"></img>
        <img src={mountainImage4} alt="a table full of delicious food"></img>
        <img src={mountainImage5} alt="a table full of delicious food"></img>
      </div>
    </div>
  );
};

export default Food;
