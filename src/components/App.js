import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [taskList, setTaskList] = useState(TASKS);
  // const [displayList, setDisplayList] = useState("All");

  function handleClickBtn(category) {
    setSelectedCategory(category);
    let displayTasks = TASKS.filter((task) => {
      if (category === "All") return true;

      return task.category === category;
    });
    setTaskList(displayTasks);
  }

  function handleDelete(id) {
    let filteredList = taskList.filter((record, index) => index !== id);
    setTaskList(filteredList);
  }

  function taskFormSubmit(formData) {
    setTaskList([...taskList, formData]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onHandleClickBtn={handleClickBtn}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskFormSubmit} />
      <TaskList tasks={taskList} onHandleDelete={handleDelete} />
    </div>
  );
}

export default App;
