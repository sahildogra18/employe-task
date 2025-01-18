import React from "react";
import AcceptTask from "./AcceptTask";

import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        } else if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        } else if (elem.failed) {
          return <FailedTask key={index} data={elem} />;
        } else if (elem.complete) {
          return <CompleteTask key={index} data={elem} />;
        } else {
          return null; // Je koi condition match nahi kardi, null render kare.
        }
      })}
    </div>
  );
};

export default TaskList;
