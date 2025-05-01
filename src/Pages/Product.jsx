import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();

  const product = Array.isArray(allProduct)
    ? allProduct.find((e) => e.id === Number(productId))
    : undefined;

  return (
    <>
      <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <Description />
      </div>
    </>
  );
};

export default Product;
