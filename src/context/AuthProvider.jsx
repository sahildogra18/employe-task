import React, { createContext, useEffect, useState } from "react";
import { getLocaleStorage, setLocaleStorage } from "../utils/localStroage";

export let AuthContext = createContext();

function AuthProvider({ children }) {
  let [userData, setUserData] = useState(null);

  // setUserData(getLocaleStorage());

  useEffect(() => {
    setLocaleStorage();
    let { employees, admin } = getLocaleStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
