import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  const tasks = Array.isArray(data) ? data : data?.tasks || [];

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {tasks.map((task, index) => {
        if (task.status === "in-progress") {
          return <AcceptTask key={task._id || index} data={task} />;
        }

        if (task.status === "completed") {
          return <CompleteTask key={task._id || index} data={task} />;
        }

        return <NewTask key={task._id || index} data={task} />;
      })}
    </div>
  );
};

export default TaskList;
