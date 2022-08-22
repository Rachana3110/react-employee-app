import axios from "axios";
import React, { useEffect, useState } from "react";

const LoginComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      setData(response.data);
    });
  }, []);
  function handleClick() {
    axios
      .post("http://localhost:3001/api/register", {
        email: "Ruchitha@gmail.com",
        password: "3110",
      })
      .then((response) => {
        setData(response.data);
      });
      
  }
  console.log(data);
  return (
    <div>
      <button onClick={handleClick}>Create data</button>
    </div>
  );
};

export default LoginComponent;
