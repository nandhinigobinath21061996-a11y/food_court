import React, { useState } from "react";
import data from "../assets/products.json";
import Product from "./Product";
import Hero from "./Hero";
import PopularProducts from "./PopularProducts";
import OfferBanner from "./OfferBanner";
import ExploreCategories from "./ExploreCategories";
import "./Home.css";
import AboutUs from "./AboutUs";
import SpecialPick from "./SpecialPick";
import Footer from "./Footer";

const Home = ({ cart, setCart }) => {
  const [products] = useState(data);
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (item) =>
            item.ftype.toLowerCase() ===
            category.toLowerCase()
        );

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Popular Products */}
      <PopularProducts
        cart={cart}
        setCart={setCart}
      />

      {/* Offer Banner */}
      <OfferBanner />

      {/* Explore Categories */}
      <ExploreCategories
        onCategorySelect={setCategory}
        selectedCategory={category}
      />

      

      {/* Selected Category Products */}
      <div
        id="menu"
        className="product-container"
      >
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      <AboutUs/>
     <SpecialPick
        cart={cart}
        setCart={setCart}
      />

      <Footer/>

    </>
  );
};

export default Home;