import React from "react";
import Card from "./Card";
import "./Netflix.css";
import Sdata from "./Sdata";

/*function ncard(val) {
  return <Card img={val.img} alt={val.alt} link={val.link} title={val.title} />;
}*/

//const ncard = (val) =><Card img={val.img} alt={val.alt} link={val.link} title={val.title} />;

const Netflix = () => {
  return (
    <>
      <h1 className="heading_style">Top 6 Netflix Series</h1>
      {Sdata.map((val) => (
        <Card
          key={val.id}
          img={val.img}
          alt={val.alt}
          link={val.link}
          title={val.title}
        />
      ))}
      ;
    </>
  );
};

export default Netflix;
