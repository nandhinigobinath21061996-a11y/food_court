import React from "react";
import "./Product.css";

const Product = ({ product, cart, setCart }) => {

  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(
      cart.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="product">

      <div className="img">
        <img
          src={product.pic}
          alt={product.name}
        />
      </div>

      <div className="details">

        {/* TOP LEFT - NAME */}
        <h3>{name}</h3>

        {/* BOTTOM LEFT - PRICE */}
        <p className="price">
          ₹{product.amt}
        </p>

        {/* BOTTOM RIGHT - ADD */}
        {cart.some((item) => item.id === product.id) ? (
          <button
            className="btnRemove"
            onClick={removeCart}
          >
            Remove
          </button>
        ) : (
          <button onClick={addCart}>
            Add
          </button>
        )}

      </div>

    </div>
  );
};

export default Product;