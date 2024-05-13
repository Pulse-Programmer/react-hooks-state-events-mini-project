import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          onHandleDelete={onHandleDelete}
          index={index}
        />
      ))}
    </div>
  );
}

export default TaskList;
