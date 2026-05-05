const AllTask = ({ tasks }) => {
  return (
    <div className="mt-5">
      {tasks.length === 0 ? (
        <p className="text-white">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gray-800 text-white p-4 mb-2 rounded"
          >
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>Category: {task.category || "General"}</p>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Assigned To: {task.assignedTo?.name || "Unassigned"}</p>
            <p>
              Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : "Not set"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;
