import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../other/Header";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:3000/api/tasks", {
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

  const updateTaskStatus = async (taskId, status) => {
    const token = localStorage.getItem("token");

    try {
      await axios.patch(
        `http://localhost:3000/api/tasks/${taskId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Could not update task");
    }
  };

  const todoTasks = tasks.filter((task) => task.status === "todo").length;
  const activeTasks = tasks.filter((task) => task.status === "in-progress").length;
  const completedTasks = tasks.filter((task) => task.status === "completed").length;

  return (
    <div className="p-10 bg-[#1c1c1c] min-h-screen text-white">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="px-6 py-6 rounded-xl bg-red-500">
          <h2 className="text-3xl font-semibold">{todoTasks}</h2>
          <h3 className="text-xl font-medium mt-2">New Tasks</h3>
        </div>
        <div className="px-6 py-6 rounded-xl bg-blue-500">
          <h2 className="text-3xl font-semibold">{activeTasks}</h2>
          <h3 className="text-xl font-medium mt-2">In Progress</h3>
        </div>
        <div className="px-6 py-6 rounded-xl bg-green-500">
          <h2 className="text-3xl font-semibold">{completedTasks}</h2>
          <h3 className="text-xl font-medium mt-2">Completed</h3>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-300">No assigned tasks found.</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="bg-gray-800 rounded-xl p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">{task.title}</h2>
                  <p className="text-sm text-emerald-400 mt-1">
                    {task.category || "General"}
                  </p>
                </div>
                <span className="px-4 py-2 rounded-full bg-gray-700 text-sm w-fit">
                  {task.status}
                </span>
              </div>

              <p className="mt-4 text-gray-200">{task.description}</p>

              <div className="mt-4 text-sm text-gray-300 space-y-1">
                <p>
                  Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : "Not set"}
                </p>
                <p>Created By: {task.createdBy?.name || "Admin"}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                {task.status === "todo" && (
                  <button
                    onClick={() => updateTaskStatus(task._id, "in-progress")}
                    className="bg-blue-600 px-4 py-2 rounded"
                  >
                    Start Task
                  </button>
                )}

                {task.status !== "completed" && (
                  <button
                    onClick={() => updateTaskStatus(task._id, "completed")}
                    className="bg-green-600 px-4 py-2 rounded"
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
