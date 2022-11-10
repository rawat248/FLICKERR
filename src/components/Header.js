import React from "react";
import Form from "./Form";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Flicker</h1>
      <Form />
      <Nav />
    </div>
  );
};

export default Header;
