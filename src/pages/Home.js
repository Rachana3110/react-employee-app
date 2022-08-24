import React from "react";

function HomePage({ setToken }) {
  const handleLogout = () => {
    setToken("");
  };
  return (
    <div>
      Welcome to Home Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default HomePage;
