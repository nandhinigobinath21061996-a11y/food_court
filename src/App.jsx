import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Header } from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

import { AuthContext } from "./context/AuthContext";

function App() {

  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  // Load cart whenever logged-in user changes
  useEffect(() => {

    if (user) {

      const cartKey = `cart_${user.email}`;

      const storedCart = localStorage.getItem(cartKey);

      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]);
      }

    } else {

      // No user logged in
      setCart([]);

    }

  }, [user]);


  // Update cart and save it for the logged-in user
  const handleSetCart = (updatedCart) => {

    setCart((previousCart) => {

      const newCart =
        typeof updatedCart === "function"
          ? updatedCart(previousCart)
          : updatedCart;

      if (user) {

        const cartKey = `cart_${user.email}`;

        localStorage.setItem(
          cartKey,
          JSON.stringify(newCart)
        );
      }

      return newCart;
    });
  };


  return (
    <BrowserRouter>

      <Header cart={cart} />

      <div className="container">

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={handleSetCart}
              />
            }
          />


          {/* CART */}

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={handleSetCart}
              />
            }
          />


          {/* REGISTER */}

          <Route
            path="/register"
            element={<Register />}
          />


          {/* LOGIN */}

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;