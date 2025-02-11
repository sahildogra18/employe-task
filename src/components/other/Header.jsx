import React, { useEffect, useState } from "react";
import { setLocaleStorage } from "../../utils/localStroage";
import { useNavigate } from "react-router-dom";

function Header({ data }) {
  let [userName, setUserName] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      setUserName("Admin");
    } else {
      setUserName(data.firstName);
      console.log(data.firstName);
    }
  }, []);

  function logOut() {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
    // Navigate("/");
  }
  return (
    <div className="flex items-centre justify-between mb-20 ">
      <h1 className="text-2xl  font-semibold">
        hello <br /> <span className="text-3xl">{userName}</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-500 text-white px-5 py-2 rounded text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
