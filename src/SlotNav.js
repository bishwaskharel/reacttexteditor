import React from "react";
import { Link } from "react-router-dom";
import "./SlotNav.css";

const SlotNav = () => {
  return (
    <>
      <nav className="navstyle1">
        <ul>
          <li>
            <Link to="UpTime"> Live Time </Link>
          </li>
          <li>
            <Link to="InNum">Increase Number </Link>
          </li>
          <li>
            <Link to="./RealTime"> Real Time </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SlotNav;
