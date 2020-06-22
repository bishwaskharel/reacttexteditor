import React from "react";
import Calculator, { sum, sub, div, mul } from "./Calculator";

const Contact = () => {
  return (
    <div>
      <Calculator />
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
