import React, { use, useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

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
              <Link to="/"> Shop {menu === "shop" ? <hr /> : <></>}</Link>
            </p>

            <p onClick={() => setMenu("Mens")}>
              <Link to="mens">Men {menu === "Mens" ? <hr /> : <></>}</Link>
            </p>

            <p onClick={() => setMenu("Womens")}>
              <Link to="womens">
                Women {menu === "Womens" ? <hr /> : <></>}
              </Link>
            </p>

            <p onClick={() => setMenu("Kids")}>
              <Link to="kids"> Kids {menu === "Kids" ? <hr /> : <></>}</Link>
            </p>
          </div>
          <div className="login-and-cart-button">
            <button>Login</button>
            <Link to="cart">
              <img src={cart_icon} />
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
