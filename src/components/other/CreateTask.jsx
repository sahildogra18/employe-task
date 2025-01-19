import React from "react";
import { useState } from "react";
import NewTask from "../TaskList/NewTask";

function CreateTask() {
  let [taskTitle, setTaskTitle] = useState("");
  let [taskDescription, setTaskDescription] = useState("");
  let [taskDate, setTaskDate] = useState("");
  let [assignTo, SetAssignTo] = useState("");
  let [category, setCategory] = useState("");

  let [newTask, setNewTask] = useState({});

  let submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      NewTask: true,
      failed: false,
      completed: false,
    });

    let data = JSON.parse(localStorage.getItem("employees"));
    // console.log(data);
    // console.log(task);

    data.forEach((elem) => {
      // console.log(elem.firstName);
      if (assignTo == elem.firstName) {
        // console.log(elem.tasks);
        elem.tasks.push(newTask);
        console.log(elem);
      }
      localStorage.setItem("employees", JSON.stringify(data));

      setCategory("");
      setTaskTitle("");
      setTaskDescription();
      setTaskDate("");
      SetAssignTo("");
    });
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex w-screen justify-between bg-slate-950 p-11"
      >
        <div className="firsthalf flex flex-col gap-9">
          <div className="">
            <div>Task Title</div>
            <div>
              <input
                className="w-[400px] p-2 text-start  bg-black text-yellow-50"
                type="text"
                placeholder="Make your UI design"
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="">
            <div>Date</div>
            <div>
              <input
                className="w-[400px] p-2 text-start  bg-black text-yellow-50"
                type="date"
                placeholder="Make your UI design"
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="">
            <div>Assign to</div>
            <div>
              <input
                className="w-[400px] p-2 text-start  bg-black text-yellow-50"
                type="text"
                placeholder="employee name"
                value={assignTo}
                onChange={(e) => {
                  SetAssignTo(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="">
            <div>Category</div>
            <div>
              <input
                className="w-[400px] p-2 text-start bg-black text-yellow-50"
                type="text"
                placeholder="design, dev,etc"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="second-half flex flex-col gap-9 ">
          <div>
            <h3>Description</h3>
            <textarea
              className=" bg-black text-yellow-50 "
              cols={80}
              rows={10}
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button className="bg-green-600 text-yellow-50 py-4 px-4 w-full">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
