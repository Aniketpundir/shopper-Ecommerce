import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdwon from "../assets/dropdown_icon.png";
import CardItems from "../Components/cardItems/CardItems";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  return (
    <>
      <div className="shopCategory">
        <img className="banner" src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdwon} alt="" />
          </div>
        </div>
        <div className="shopCategory-Products">
          {allProduct.map((items, index) => {
            if (props.category === items.category) {
              return (
                <>
                  <CardItems
                    id={items.id}
                    image={items.image}
                    name={items.name}
                    new_price={items.new_price}
                    old_price={items.old_price}
                  />
                </>
              );
            } else {
              return null;
            }
          })}
        </div>
        <button>Explore More</button>
      </div>
    </>
  );
};

export default ShopCategory;
