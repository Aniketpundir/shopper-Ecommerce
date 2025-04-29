import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import CardItems from "../cardItems/CardItems";

export const Popular = () => {
  return (
    <>
      <div className="popular">
        <h1>Popular in womens</h1>
        <hr />
        <div className="popular-items">
          {data_product.map((items, index) => {
            return (
              <CardItems
                key={index}
                image={items.image}
                name={items.name}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
