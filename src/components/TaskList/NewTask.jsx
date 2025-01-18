import React from "react";

function NewTask() {
  return (
    <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl">
      <h2>New Task</h2>
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-4xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-4">{data.taskDescription}</p>
      <div className="mt-4"></div>
      <button>Accept Task</button>
    </div>
  );
}

export default NewTask;
