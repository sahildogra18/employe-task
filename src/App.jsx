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

  let authData = useContext(AuthContext);
  // console.log(authData.employees);

  useEffect(() => {
    if (authData) {
      let loggedInUser = localStorage.getItem(`loggedInUser`);
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, []);

  let handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email == email && e.password == password)
    ) {
      setUser("admin");
      localStorage.setItem(`loggedInUser`, JSON.stringify({ role: `admin` }));
      console.log(`this is admin`);
    } else if (
      authData &&
      authData.employees.find((e) => e.email == email && e.password == password)
    ) {
      setUser(`employee`);
      localStorage.setItem(
        `loggedInUser`,
        JSON.stringify({ role: `employee` })
      );
      console.log("user is valid");
    } else {
      alert("invalid details");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashborad /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashborad /> */}
    </>
  );
}

export default App;
