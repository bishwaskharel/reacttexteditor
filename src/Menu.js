import React from "react";
import "./menustyle.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navstyle">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="Netflix">Netflix</NavLink>
        </li>
        <li>
          <NavLink to="Slot">Slot</NavLink>
        </li>
        <li>
          <NavLink to="Contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="About">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
