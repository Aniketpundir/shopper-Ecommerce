import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="ProductDisplay">
        <div className="ProductDisplay-left">
          <div className="ProductDisplay-img-list">
            <img src={product.image} />
            <img src={product.image} />
            <img src={product.image} />
            <img src={product.image} />
          </div>
          <div className="ProductDisplay-img">
            <img className="ProductDisplay-main-img" src={product.image} />
          </div>
        </div>
        <div className="ProductDisplay-right">
          <h1>{product.name}</h1>
          <div className="ProductDisplay-right-star">
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_dull_icon} />
            <p>(122)</p>
          </div>
          <div className="ProductDisplay-right-price">
            <div className="ProductDisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="ProductDisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>
          <div className="ProductDisplay-right-price-discription">
            Clothes are garments worn to cover the body, providing protection,
            comfort, and style. They come in various materials, designs, and
            functions, ranging from casual everyday wear to formal attire.
          </div>
          <div className="ProductDisplay-right-size">
            <h1>Select size</h1>
            <div className="ProductDisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="ProductDisplay-right-category">
            <span>Category : </span>Women, T-shirt, Crop Top
          </p>
          <p className="ProductDisplay-right-category">
            <span>Tags : </span>Modern, Latest
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
