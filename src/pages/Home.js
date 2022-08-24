import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setToken }) {
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      console.log(response.data)
    });
  }, []);

  const handleLogout = () => {
    setToken("");
    navigate('/')
  };
  return (
    <div>
      Welcome to Home Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default HomePage;
