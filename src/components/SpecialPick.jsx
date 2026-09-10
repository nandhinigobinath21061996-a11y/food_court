import React from "react";
import "./SpecialPick.css";

const SpecialPicks = ({ cart, setCart }) => {

    const specialProducts = [
        {
            id: 201,
            name: "Loaded Veg Pizza",
            price: 299,
            image: "https://www.app.tutorjoes.in/img/food/89.jpg",
            description: "Crispy crust with fresh vegetables and melted cheese."
        },
        {
            id: 202,
            name: "Chocolate Lava Cake",
            price: 199,
            image: "https://www.app.tutorjoes.in/img/food/64.jpg",
            description: "Rich chocolate cake with a delicious gooey center."
        },
        {
            id: 203,
            name: "Fresh Orange Juice",
            price: 70,
            image: "https://www.app.tutorjoes.in/img/food/28.jpg",
            description: "Fresh and refreshing natural orange juice."
        }
    ];

    const addToCart = (product) => {
        setCart([...cart, {
            id: product.id,
            name: product.name,
            amt: product.price,
            pic: product.image
        }]);
    };

    return (
        <section className="special-section">

            <div className="special-heading">

                <p>HAPPINESS IN EVERY BITE</p>

                <h2>Our Special Picks</h2>

                <span>
                    Freshly prepared, specially for you
                </span>

            </div>


            <div className="special-container">

                {specialProducts.map((product) => (

                    <div
                        className="special-card"
                        key={product.id}
                    >

                        <div className="special-image">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>


                        <div className="special-details">

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                {product.description}
                            </p>


                            <div className="special-bottom">

                                <span>
                                    ₹{product.price}
                                </span>

                                <button
                                    onClick={() =>
                                        addToCart(product)
                                    }
                                >
                                    Add
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default SpecialPicks;