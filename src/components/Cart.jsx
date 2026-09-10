import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  // Create a list with quantity for each product
  const cartItems = cart.reduce((items, product) => {
    const existingItem = items.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({
        ...product,
        quantity: 1,
      });
    }

    return items;
  }, []);

  // Calculate total
  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, item) =>
        acc + Number(item.amt) * item.quantity,
      0
    );

    setTotal(totalAmount);
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (product) => {
    setCart([...cart, product]);
  };

  // Decrease quantity
  const decreaseQuantity = (product) => {
    const index = cart.findIndex(
      (item) => item.id === product.id
    );

    if (index !== -1) {
      const updatedCart = [...cart];

      updatedCart.splice(index, 1);

      setCart(updatedCart);
    }
  };

  // Remove completely
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  return (
    <div className="cart-page">

      <h1 className="cart-heading">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2 className="empty-cart">
          Your cart is empty 🛒
        </h2>

      ) : (

        <>
          <div className="cart-container">

            {cartItems.map((product) => (

              <div
                className="cart-product"
                key={product.id}
              >

                <div className="img">
                  <img
                    src={product.pic}
                    alt={product.name}
                  />
                </div>

                <div className="cart-product-details">

                  <h3>{product.name}</h3>

                  <p>
                    Price: ₹{product.amt}
                  </p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(product)
                      }
                    >
                      −
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(product)
                      }
                    >
                      +
                    </button>

                  </div>

                  <p>
                    Item Total: ₹
                    {Number(product.amt) *
                      product.quantity}
                  </p>

                  <button
                    className="remove-cart-btn"
                    onClick={() =>
                      removeItem(product.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <h2 className="cart-amt">
            Total Amount: ₹{total}
          </h2>
        </>

      )}

    </div>
  );
};

export default Cart;