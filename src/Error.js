import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>
        <h1>404 Error Page</h1>
        <h1>Sorry, This is invalid Page</h1>

        <NavLink to="/">
          <div className="text-center">
            <button className="btn btn-primary  ">Home Page</button>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
