import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <>
      <div className="Navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <img src={logo} />
            <h1>Shopper</h1>
          </div>
          <div className="navbar-menu">
            <p onClick={() => setMenu("shop")}>
              Shop {menu === "shop" ? <hr /> : <></>}
            </p>
            <p onClick={() => setMenu("Mens")}>
              Men {menu === "Mens" ? <hr /> : <></>}
            </p>
            <p onClick={() => setMenu("Womens")}>
              Women {menu === "Womens" ? <hr /> : <></>}
            </p>
            <p onClick={() => setMenu("Kids")}>
              Kids {menu === "Kids" ? <hr /> : <></>}
            </p>
          </div>
          <div className="login-and-cart-button">
            <button>Login</button>
            <img src={cart_icon} />
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
