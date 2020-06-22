import React from "react";
import Card from "./Card";

const Netflix = () => {
  return (
    <>
      <Card
        imgsrc="https://picsum.photos/250/300"
        alt="1st Movie"
        span="A netflix Series"
        href="https://www.sainotech.com"
        h3="Saino Tech"
      />
      <Card
        imgsrc="https://picsum.photos/240/300"
        alt="1st Movie"
        span="A netflix Series"
        href="https://www.Facebook.com"
        h3="Facebook"
      />
      <Card
        imgsrc="https://picsum.photos/230/300"
        alt="1st Movie"
        span="A netflix Series"
        href="https://www.Twitter.com"
        h3="Twitter"
      />
      <Card
        imgsrc="https://picsum.photos/220/300"
        alt="1st Movie"
        span="A netflix Series"
        href="https://www.Instagram.com"
        h3="Instagram"
      />
    </>
  );
};

export default Netflix;
