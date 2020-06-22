import React from "react";

function sum(a, b) {
  let sum = a + b;
  return sum;
}
function sub(a, b) {
  let sub = a - b;
  return sub;
}
function div(a, b) {
  let div = a / b;
  return div;
}
function mul(a, b) {
  let mul = a * b;
  return mul;
}

export { sum, sub, div, mul };

const Calculator = () => {
  return <h1>Hello This is Calculator</h1>;
};

export default Calculator;
