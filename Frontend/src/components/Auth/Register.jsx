import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("User registered successfully");
      setName("");
      setEmail("");
      setPassword("");
      setRole("employee");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 border-emerald-600 p-8 rounded-xl">
        <h2 className="text-white text-2xl mb-6 text-center">Register</h2>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-white text-xl py-2 px-5 rounded-full placeholder:text-gray-400"
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-white text-xl py-2 px-5 rounded-full placeholder:text-gray-400"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-white text-xl py-2 px-5 rounded-full placeholder:text-gray-400"
          />

          <div className="w-full">
            <p className="text-white text-sm mb-2">Select Role</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setRole("employee")}
                className={`flex-1 border-2 px-5 py-2 rounded-full text-lg ${
                  role === "employee"
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-transparent border-emerald-600 text-white"
                }`}
              >
                Employee
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`flex-1 border-2 px-5 py-2 rounded-full text-lg ${
                  role === "admin"
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-transparent border-emerald-600 text-white"
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 bg-emerald-600 text-white px-6 py-2 rounded-full text-lg hover:bg-emerald-700 transition"
          >
            Register
          </button>
          <p className="text-white mt-3">
            Already have an account?{" "}
            <Link to="/" className="text-green-400 underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
