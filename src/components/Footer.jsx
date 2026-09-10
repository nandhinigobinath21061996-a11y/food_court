import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* TOP ROW */}

                <div className="footer-top">

                    <div className="footer-logo">
                        <h2>Food Court</h2>
                    </div>

                    <div className="follow-us">

                        <span>Follow us</span>

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                        <a href="#" aria-label="Pinterest">
                            p
                        </a>

                        <a href="#" aria-label="WhatsApp">
                            w
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="footer-line"></div>


                {/* FOOTER CONTENT */}

                <div className="footer-content">

                    {/* ABOUT */}

                    <div className="footer-column">

                        <h3>About Us</h3>

                        <p>+91 98765 43210</p>

                        <p>foodcourt@gmail.com</p>

                        <p>Chamarajanagar</p>

                        <p>Karnataka, India</p>

                    </div>


                    {/* EXPLORE */}

                    <div className="footer-column">

                        <h3>Explore</h3>

                        <Link to="/">Home</Link>

                        <a href="#menu">Menu</a>

                        <a href="#menu">Categories</a>

                        <Link to="/cart">Cart</Link>

                    </div>


                    {/* RECENT NEWS */}

                    <div className="footer-column recent-news">

                        <h3>Recent News</h3>

                        <div className="news-item">

                            <img
                                src="https://www.app.tutorjoes.in/img/food/64.jpg"
                                alt="Brownie"
                            />

                            <div>
                                <small>September 2026</small>

                                <p>
                                    Delicious treats
                                    prepared fresh.
                                </p>
                            </div>

                        </div>


                        <div className="news-item">

                            <img
                                src="https://www.app.tutorjoes.in/img/food/89.jpg"
                                alt="Pizza"
                            />

                            <div>
                                <small>September 2026</small>

                                <p>
                                    Fresh food,
                                    happy moments.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div className="footer-bottom">

                    <p>
                        © 2026 Food Court. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;