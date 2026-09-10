import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            alert("Please register first");
            return;
        }

        const user = JSON.parse(storedUser);

        if (
            email === user.email &&
            password === user.password
        ) {

            // Update AuthContext
            login(user);

            alert("Login successful!");

            navigate("/");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="login-page">

            <div className="login-box">

                <h2>Welcome Back</h2>

                <p>Login to Food Court</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="register-link">
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;