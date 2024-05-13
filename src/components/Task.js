import React from "react";

function Task({ task, onHandleDelete, index }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onHandleDelete(index)}>
        X
      </button>
    </div>
  );
}

export default Task;
