import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const name = "bishu";
const img1 = "https://picsum.photos/250/300";
const img4 = "https://picsum.photos/230/300";
const link = "https://www.sainotech.com";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="heading">Hello I'm rom Home Page</h1>
      <h1 className="ndHeading">My name is {name}</h1>
      <div className="imgall">
        <a href={link} target="bihsu">
          <img src={img1} alt="randomImages" />
        </a>
        <Link to="About">
          <img src={img4} alt="randomImages" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
