import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [optionCat, setOptionCat] = useState("Code");
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      text: inputText,
      category: optionCat,
    };
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => setOptionCat(e.target.value)}
          value={optionCat}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category === "All") {
              return null;
            }
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
