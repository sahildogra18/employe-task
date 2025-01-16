import React from "react";

function CreateTask() {
  return (
    <div>
      <form className="flex w-screen justify-between bg-slate-950 p-11">
        <div className="firsthalf flex flex-col gap-9">
          <div className="">
            <div>Task Title</div>
            <div>
              <input
                className="w-[400px] p-2 text-start  bg-black text-yellow-50"
                type="text"
                placeholder="Make your UI design"
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
