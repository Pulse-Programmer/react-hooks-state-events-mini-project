import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //tracks current state of tasks
  const [taskList, setTaskList] = useState(() => TASKS);
  //displays latest state from taskList
  let [displayList, setDisplayList] = useState(() => TASKS);

  //handle display of categories
  function handleClickBtn(category) {
    setSelectedCategory(category);
    const displayTasks =
      category === "All"
        ? taskList
        : taskList.filter((task) => task.category === category);
    setDisplayList(displayTasks);
  }

  //handle delete of items on list
  function handleDelete(id) {
    setTaskList((prevTaskList) => {
      const filteredList = prevTaskList.filter((_, index) => index !== id);
      setDisplayList(filteredList);
      return filteredList;
    });
    //setDisplayList(taskList);
  }

  //handle add item on list
  function taskFormSubmit(formData) {
    setTaskList((prevTaskList) => {
      const updatedList = [...prevTaskList, formData];
      setDisplayList(updatedList);
      return updatedList;
    });
    //setDisplayList(taskList);
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
      <TaskList tasks={displayList} onHandleDelete={handleDelete} />
    </div>
  );
}

export default App;
