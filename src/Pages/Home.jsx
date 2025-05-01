import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Banner from "../Components/Banner/Banner";
import New_Collections from "../Components/New_Collections/New_Collections";
import NewsLatter from "../Components/newsLatter/NewsLatter";
import { ShopContext } from "../Context/ShopContext";

const Home = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();

  const product = Array.isArray(allProduct)
    ? allProduct.find((e) => e.id === Number(productId))
    : undefined;

  return (
    <>
      <div>
        <Hero />
        <Popular product={product} />
        <Banner />
        <New_Collections />
        <NewsLatter />
      </div>
    </>
  );
};

export default Home;
