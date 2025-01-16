import React, { useState } from "react";

export const Login = () => {
  let [email, setEmail] = useState("carryislive@gmail.com");
  let [password, setPassword] = useState("qwerty");

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(`email is ${email} , password is ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-red-600 p-20 rounded-3xl">
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
