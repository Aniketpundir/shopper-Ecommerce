import React from "react";
import { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../../assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { allProduct, cartItems, removeToCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <>
      <div className="CartItems">
        <div className="CartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <>
                <div>
                  <div className="CartItems-format CartItems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="CartItems-quantity">
                      {cartItems[e.id]}
                    </button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img
                      className="remoce_icon"
                      src={remove_icon}
                      onClick={() => removeToCart(e.id)}
                      alt=""
                    />
                  </div>
                  <hr />
                </div>
              </>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Totals</h1>
            <div>
              <div className="cartitems-totalItems">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-totalItems">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-totalItems">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
