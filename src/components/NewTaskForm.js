import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleSubmit(e) {
    e.preventDefault();

    onTaskFormSubmit(formData);
    setFormData({ text: "", category: "Code" }); // Reset form fields after submission
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.text}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.category}
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
