// Categories.js
import React from "react";
import Categories from "./categories";
const Categoris = ({ onAddToCart }) => {
  const handleClick = (item) => {
    onAddToCart(item);
  };

  return (
    <div className="categories">
      {Categories.map((item) => (
        <div key={item.id} className="category-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Price: #{item.price}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Categoris;
