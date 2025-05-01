import React from "react";
import "./NewsLatter.css";

const NewsLatter = () => {
  return (
    <>
      <div className="news-latter">
        <div className="news-latter-content">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newslatter and stay updated.</p>
          <div className="news-letter-input-button">
            <input type="text" placeholder="Your email id" />
            <button>Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
