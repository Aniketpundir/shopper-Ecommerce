import React from "react";
import "./CardItems.css";
import png from "../../assets/product_1.png";
import { Link } from "react-router-dom";

const CardItems = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <Link to={`/product/${props.id}`}>
              <img src={props.image} onClick={window.scroll(0, -10)} alt="" />
            </Link>
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
