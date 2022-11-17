import React from "react";
import Form from "./Form";
import Nav from "./Nav";
import PropTypes from "prop-types";

const Header = ({ navigate, searchHandler }) => {
  return (
    <div>
      <h1>Flicker</h1>
      <Form navigate={navigate} searchHandler={searchHandler} />
      <Nav />
    </div>
  );
};
Header.propTypes = {
  navigate: PropTypes.string.isRequired
};
Header.propTypes = {
  searchHandler: PropTypes.string.isRequired
};

export default Header;
