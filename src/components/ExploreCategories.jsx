import React from "react";
import "./ExploreCategories.css";

const ExploreCategories = ({
  onCategorySelect,
  selectedCategory,
}) => {
  const categories = [
    "Pizza",
    "Veg",
    "Non-Veg",
    "Juice",
    "Cake",
    "IceCream",
    "Soup",
  ];

  return (
    <section className="explore-section">
      <div className="explore-heading">

        <h2>Explore More</h2>

        <div className="explore-tabs">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                onCategorySelect(category)
              }
            >
              {category === "IceCream"
                ? "Ice Cream"
                : category}
            </button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;