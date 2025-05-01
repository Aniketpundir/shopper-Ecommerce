import React, { createContext, useState } from "react";
import allProduct from "../assets/all_product";

export const ShopContext = createContext(null);

//Add to cart Functionality

const getDefault = () => {
  let cart = {};
  for (let index = 0; index < allProduct.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  //This state use for add to cart
  const [cartItems, setCartItems] = useState(getDefault());

  //Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Array.isArray(allProduct)
          ? allProduct.find((e) => e.id === Number(item))
          : undefined;

        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    allProduct,
    cartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
