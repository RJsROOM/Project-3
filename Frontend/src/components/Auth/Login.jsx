import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = await handleLogin(email, password);
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/employee");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Log In
          </button>
          <p className="text-white mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-400 underline">
              Create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
