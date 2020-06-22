import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt={props.alt} className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.span}</span>
          <h3 className="card_title">{props.h3}</h3>
          <a href={props.href} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
