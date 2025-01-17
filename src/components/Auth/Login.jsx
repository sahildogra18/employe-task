import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  // console.log(handleLogin);
  let [email, setEmail] = useState("admin@example.com");
  let [password, setPassword] = useState("123");

  let submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log(`email is ${email} , password is ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-red-600 p-20 rounded-3xl hover:border-blue-600">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-3 text-xl text-white outline-none bg-transparent placeholder:text-white"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-3 text-xl text-white outline-none bg-transparent placeholder:text-white"
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="border-2 mt-5 border-emerald-600 rounded-full py-3 px-3 text-xl text-white outline-none bg-emerald-600 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
