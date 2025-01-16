import React from "react";

function Header() {
  return (
    <div className="flex items-centre justify-between mb-20 ">
      <h1 className="text-2xl  font-semibold">
        hello <br /> <span className="text-3xl">Sahil</span>
      </h1>
      <button className="bg-red-500 text-white px-5 py-2 rounded text-lg font-medium">
        Log Out
      </button>
    </div>
  );
}

export default Header;
