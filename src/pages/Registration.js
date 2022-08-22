import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/css/Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [emp_id, setEmp_id] = useState(null);
  const [password, setPassword] = useState("");
  const [retype_password, setRetype_password] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3001/api/register").then((response) => {
        setData(response.data);
      });
    };
    fetchData();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (data !== undefined) {
      const postData = async () => {
        await axios
          .post("http://localhost:3001/api/register", {
            Employee_ID_Number: emp_id,
            Password: password,
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          });
      };
      if (
        password === retype_password &&
        !data.map((emp) => emp.Employee_ID_Number).includes(emp_id)
      ) {
        postData();
        navigate("/");
      } else console.log("registration unsuccessfull");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label htmlFor="number">Employee ID</label>

        <input
          type="number"
          id="emp_id"
          name="emp_id"
          onChange={(e) => {
            return setEmp_id(e.target.value);
          }}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
          required
        />

        <label htmlFor="password">Retype-Password</label>

        <input
          type="password"
          id="retype_password"
          name="password"
          onChange={(e) => {
            return setRetype_password(e.target.value);
          }}
          required
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registration;
