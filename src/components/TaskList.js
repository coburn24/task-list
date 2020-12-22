import React from "react";
import Task from "./Task";

export default TaskList({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">Loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">Empty</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};


