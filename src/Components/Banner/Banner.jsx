import React from "react";
import "./Banner.css";
import exclusive_image from "../../assets/exclusive_image.png";

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1>
              Exclusive <br /> Offers For You
            </h1>
            <p>only on best sellers products</p>
            <button>Check now</button>
          </div>
          <div className="banner-img">
            <img src={exclusive_image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
