import React from "react";
import "./Footer.css";
import bigLogo from "../../assets/logo_big.png";
import insta from "../../assets/instagram_icon.png";
import whatsapp from "../../assets/whatsapp_icon.png";
import pintester from "../../assets/pintester_icon.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={bigLogo} alt="" />
            <h1>Shopper</h1>
          </div>
          <div className="footer-menu">
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="social-media">
            <img src={insta} alt="" />
            <img src={pintester} alt="" />
            <img src={whatsapp} alt="" />
          </div>
          <hr />
          copyright @ 2025 - All Right Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
