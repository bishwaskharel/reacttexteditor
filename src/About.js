import React from "react";
import "./About.css";

var curr = new Date().getDate();
var greet = "";


const cssStyle = {};

if (curr >= 1 && curr < 12) {
  greet = "Good Morning";
  cssStyle.color = "Green";
} else if (curr >= 12 && curr < 19) {
  greet = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  cssStyle.color = "Black";
  greet = "Good Night";
}



export {greet,curr};


const About = () => {
  return (
    <div1>
      <div2>
      <h1>
        Hello sir, <span style={cssStyle}>{greet}</span>
      </h1>
      </div2>
    </div1>
  );
};
export default About;


