import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  let authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
      <div className="bg-red-500 py-2 px-4 flex justify-between rounded mb-2 ">
        <h2 className="w-1/5 bg-red-600">Employee Name</h2>
        <h3 className="w-1/5 bg-red-600">New Task</h3>
        <h5 className="w-1/5 bg-red-600">Active Status</h5>
        <h5 className="w-1/5 bg-red-600">Completed</h5>
        <h5 className="w-1/5 bg-red-600">Failed</h5>
      </div>
      <div className="h-[80%] ">
        {authData.employees.map((elem) => {
          return (
            <>
              <div className="bg-black-200 py-2 px-4 flex justify-between rounded mb-2 ">
                <h2 className="w-1/5 bg-white-600">{elem.firstName}</h2>
                <h3 className="w-1/5 text-blue-400">
                  {elem.taskSummary.newTask}
                </h3>
                <h5 className="w-1/5 text-yellow-400">
                  {" "}
                  {elem.taskSummary.active}
                </h5>
                <h5 className="w-1/5 text-green-400">
                  {elem.taskSummary.complete}
                </h5>
                <h5 className="w-1/5 text-red-400">
                  {elem.taskSummary.failed}
                </h5>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
