//import React, { useState } from "react";

function CategoryFilter({ categories, onHandleClickBtn, selectedCategory }) {
  //const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onHandleClickBtn(category)}
          //className={clicked ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
