import React from "react";
import Calc, { sum, sub, div, mul } from "./Calc";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Calc />
      <h1>
        <ul>
          <li>Sum is {sum(10, 20)}</li>
          <li>Sub is {sub(10, 20)}</li>
          <li>Div is {div(10, 20)}</li>
          <li>Mul is {mul(10, 20)}</li>
        </ul>
      </h1>
    </div>
  );
};
export default Contact;
