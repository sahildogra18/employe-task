import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className=" h-[55%] overflow-x-auto w-full  mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap"
    >
      <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-4xl font-semibold">play a cricket match </h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos iure
          aspernatur inventore veritatis enim porro facilis optio ducimus eum
          animi natus laborum excepturi voluptatum consequatur fugit nam
          tempore, culpa eaque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-4xl font-semibold">play a cricket match </h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos iure
          aspernatur inventore veritatis enim porro facilis optio ducimus eum
          animi natus laborum excepturi voluptatum consequatur fugit nam
          tempore, culpa eaque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-orange-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-4xl font-semibold">play a cricket match </h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos iure
          aspernatur inventore veritatis enim porro facilis optio ducimus eum
          animi natus laborum excepturi voluptatum consequatur fugit nam
          tempore, culpa eaque?
        </p>
      </div>

      <div className=" flex-shrink-0 h-full w-[400px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-4xl font-semibold">play a cricket match </h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos iure
          aspernatur inventore veritatis enim porro facilis optio ducimus eum
          animi natus laborum excepturi voluptatum consequatur fugit nam
          tempore, culpa eaque?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
