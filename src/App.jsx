import "./App.css";
import { Login } from "./components/Auth/Login";
import AdminDashborad from "./components/Dashboard/AdminDashborad";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashborad />
    </>
  );
}

export default App;
