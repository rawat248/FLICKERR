import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <NavLink to="/mountain" className="bar">
          Mountain
        </NavLink>

        <NavLink to="/beaches" className="bar">
          Beaches
        </NavLink>

        <NavLink to="/birds" className="bar">
          Birds
        </NavLink>

        <NavLink to="/food" className="bar">
          Food
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
