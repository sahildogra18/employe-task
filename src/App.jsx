import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Login } from "./components/Auth/Login";
import AdminDashborad from "./components/Dashboard/AdminDashborad";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocaleStorage, setLocaleStorage } from "./utils/localStroage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  useEffect(() => {
    setLocaleStorage();
    getLocaleStorage();
  }, []);

  let [user, setUser] = useState(null);
  let [loggedInUserData, setLoggedInUserData] = useState(null);
  let authData = useContext(AuthContext);

  useEffect(() => {
    let loggedInUser = localStorage.getItem(`loggedInUser`);
    console.log(loggedInUser);
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  let handleLogin = (email, password) => {
    if (authData) {
      // Admin check
      let admin = authData.admin.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        setUser("admin");
        localStorage.setItem(`loggedInUser`, JSON.stringify({ role: "admin" }));
        console.log("This is admin");
        return;
      }

      // Employee check
      let employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          `loggedInUser`,
          JSON.stringify({ role: "employee", data: "employee" })
        );
        console.log("User is valid");
        return;
      }

      // Invalid details
      alert("Invalid details");
    } else {
      alert("Invalid details");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashborad />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
}

export default App;
