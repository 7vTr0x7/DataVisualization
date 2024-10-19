import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-96 mt-10 w-auto ">
      <div className="w-3/12 border p-3 border-gray-300 rounded-md text-center">
        <p className="font-semibold text-xl">{isLogin ? "Login" : "Sign Up"}</p>
        <div className="my-3">
          <input
            className="border w-full px-2 py-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="my-3">
          <input
            className="border w-full px-2 py-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer"
            type="email"
            required
            value={email}
            placeholder="Password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {isLogin ? (
            <button className="border w-full px-2 py-1 border-gray-300 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer font-semibold">
              Login
            </button>
          ) : (
            <button className="border w-full px-2 py-1 border-gray-300 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer font-semibold">
              Sign Up
            </button>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <p>
            <span>
              {isLogin ? "Don't have account" : "Already have account"}
            </span>
            <span
              className="px-2 hover:underline cursor-pointer"
              onClick={() => setIsLogin((prev) => !prev)}>
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
