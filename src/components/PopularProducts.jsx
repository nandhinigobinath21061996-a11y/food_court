import React from "react";
import data from "../assets/products.json";
import "./PopularProducts.css";

const PopularProducts = ({ cart, setCart }) => {

  const popularProducts = data.filter(
    (product) =>
      product.id !== 89 &&
      product.id !== 28
  ).slice(0, 4);

  const addToCart = (product) => {
    setCart((previousCart) => [
      ...previousCart,
      product
    ]);
  };

  return (
    <section className="popular-section">

      <div className="popular-heading">

        <p>OUR MENU</p>

        <h2>Our Popular Picks</h2>

        <span>
          Delicious choices, made just for you
        </span>

      </div>

      <div className="popular-container">

        {popularProducts.map((product) => (

          <div
            className="popular-card"
            key={product.id}
          >

            <div className="popular-image">

              <img
                src={product.pic}
                alt={product.name}
              />

            </div>

            <div className="popular-details">

              <p className="popular-price">
                ₹{product.amt}
              </p>

              <h3>
                {product.name}
              </h3>

              <button
                onClick={() => addToCart(product)}
              >
                Add
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default PopularProducts;