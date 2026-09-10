import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {

        e.preventDefault();

        // Check empty fields
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        // Get existing users
        const existingUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        // Check whether email already exists
        const userExists = existingUsers.some(
            (user) => user.email === email
        );

        if (userExists) {
            alert("Email already registered. Please login.");
            return;
        }

        // Create new user
        const user = {
            name,
            email,
            password
        };

        // Add new user to existing users
        existingUsers.push(user);

        // Save all users
        localStorage.setItem(
            "users",
            JSON.stringify(existingUsers)
        );

        alert("Registration successful!");

        navigate("/login");
    };

    return (
        <div className="register-page">

            <div className="register-box">

                <h2>Create Account</h2>

                <p>Join Food Court today</p>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

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
                        Register
                    </button>

                </form>

                <p className="login-link">
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;