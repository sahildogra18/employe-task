// import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);
  return (
    <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-pink-400 rounded-xl">
      <h1>Accepted Task</h1>
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-4xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-4">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark as completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as failed</button>
      </div>
    </div>
  );
};
export default AcceptTask;
