import React from "react";

const Header = () => {
  const logOutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const storedUser = localStorage.getItem("user");
  let user = null;

  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch {
      user = null;
    }
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <span className="text-3xl font-semibold">{user?.name || "User"}</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
