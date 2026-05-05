import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen w-full p-10 bg-[#1c1c1c] text-white">
      <Header />
      <CreateTask onTaskCreated={fetchTasks} />
      <AllTask tasks={tasks} />
    </div>
  );
};

export default AdminDashboard;
