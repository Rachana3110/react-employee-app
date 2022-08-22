import { useEffect, useState } from "react";
import "./css/Login.css";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ setToken }) {
  const [emp_id, setEmp_id] = useState();
  const [password, setPassword] = useState();
  const [loginData, setLoginData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/login").then((response) => {
      setLoginData(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData) {
      const employeeId = loginData.token.map((emp) => emp.Employee_ID_Number);
      const employeePassword = loginData.token.map((emp) => emp.Password);
      if (employeeId.includes(emp_id) && employeePassword.includes(password)) {
        setToken(loginData);
        console.log("Login successfull");
      } else {
        console.log("login unsucessfull");
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log-In</h2>
        <label htmlFor="emp_id">Employee ID</label>
        <input
          type="number"
          id="emp_id"
          name="emp_id"
          placeholder="Enter Employee Id"
          onChange={(e) => setEmp_id(e.target.value)}
          // required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          // required
        />

        <input type="submit" value="Submit" />
        <button><Link to="/registration">Register</Link></button>
      </form>
      <nav>
      </nav>
    </div>
  );
}
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
