import React from "react";

function TaskListNumber() {
  return (
    <div className="flex screen justify-between gap-5 pt-">
      <div className=" w-[45%] bg-red-400 mt-10px  p-10 rounded-xl py-6 px-9 ">
        <h2 className="text-3xl font-semibold bg-transparent">0</h2>
        <h3 className="text-xl font-medium bg-transparent">New Task</h3>
      </div>

      <div className=" w-[45%] bg-blue-400 mt-10px  p-10 rounded-xl py-6 px-9 ">
        <h2 className="text-3xl font-semibold bg-transparent">0</h2>
        <h3 className="text-xl font-medium bg-transparent">New Task</h3>
      </div>

      <div className=" w-[45%] bg-orange-400 mt-10px  p-10 rounded-xl py-6 px-9 ">
        <h2 className="text-3xl font-semibold bg-transparent">0</h2>
        <h3 className="text-xl font-medium bg-transparent">New Task</h3>
      </div>

      <div className=" w-[45%] bg-green-400 mt-10px  p-10 rounded-xl py-6 px-9 ">
        <h2 className="text-3xl font-semibold bg-transparent">0</h2>
        <h3 className="text-xl font-medium bg-transparent">New Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
