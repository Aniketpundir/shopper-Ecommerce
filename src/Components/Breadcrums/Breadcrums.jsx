import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../../assets/arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <>
      <div className="Breadcrums">
        HOME <img src={arrow_icon} alt="" /> SHOP
        {product ? (
          <>
            <img src={arrow_icon} alt="" /> {product.category}
            <img src={arrow_icon} alt="" /> {product.name}
          </>
        ) : (
          <span>Product Not Found</span>
        )}
      </div>
    </>
  );
};

export default Breadcrums;
