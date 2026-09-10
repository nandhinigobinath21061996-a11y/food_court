import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Header = ({ cart }) => {

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Food Court
      </div>

      <ul>

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <span className="welcome">
                {user.name}
              </span>
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to="/cart">
            Cart
            <span className="cart-count">
              {cart.length}
            </span>
          </Link>
        </li>

      </ul>

    </nav>
  );
};