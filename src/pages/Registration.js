import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/css/Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [emp_id, setEmp_id] = useState();
  const [password, setPassword] = useState();
  const [retype_password, setRetype_password] = useState();

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
      if (password !== retype_password) {
        alert("Password doen't match");
      } else if (data.map((emp) => emp.Employee_ID_Number).includes(emp_id)) {
        alert("Id already exist");
      } else {
        postData();
        navigate("/");
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h2>Registration</h2>
        <label htmlFor="emp_id">Employee ID*</label>
        <input
          type="number"
          id="emp_id"
          name="emp_id"
          placeholder="Enter Employee Id"
          onChange={(e) => {
            return setEmp_id(e.target.value);
          }}
          required
        />

        <label htmlFor="first_name">First Name*</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Enter your First Name"
          // onChange={}
          required
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Enter your Last Name"
          // onChange={}
        />

        <label htmlFor="designation">Designation*</label>
        <input
          type="text"
          id="designation"
          name="designation"
          placeholder="Enter Designation"
          // onChange={(e) => {
          // }}
          required
        />

        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
          required
        />

        <label htmlFor="password">Retype-Password*</label>

        <input
          type="password"
          id="retype_password"
          placeholder="Re-type Password"
          name="password"
          onChange={(e) => {
            return setRetype_password(e.target.value);
          }}
          required
        />

        <input type="submit" value="Register" onClick={handleRegister} />
      </form>
    </div>
  );
};

export default Registration;
