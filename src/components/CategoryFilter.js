function CategoryFilter({ categories, onHandleClickBtn, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onHandleClickBtn(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
