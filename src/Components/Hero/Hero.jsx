import React from "react";
import hand from "../../assets/hand_icon.png";
import hero_icon from "../../assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h3>New arrivals only</h3>
            <h1>
              new <img src={hand} /> <br />
              collections for <br />
              everyone
            </h1>
            <button>Latest Collection ----</button>
          </div>
          <div className="hero-img">
            <img src={hero_icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
