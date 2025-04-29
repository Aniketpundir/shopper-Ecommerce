import React from "react";
import "./cardItems.css";
import png from "../../assets/product_1.png";

const CardItems = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <img src={props.image} alt="" />
          </div>
          <div className="card-text">
            <p className="title">{props.name}</p>
            <p className="price">
              ${props.new_price} <span>${props.old_price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItems;
