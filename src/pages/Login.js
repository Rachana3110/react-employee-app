import { useEffect, useState } from "react";
import "./css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [loginData, setLoginData] = useState();
  const [emp_id, setEmp_id] = useState();
  const [password, setPassword] = useState();
  const [registerData, setRegisterData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      setRegisterData(response.data);
    });

    if(emp_id && password){
      axios
      .put("http://localhost:3001/api/login", {
        Employee_ID_Number: emp_id,
        Password: password,
      })
      .then((response) => {
        setLoginData(response.data);
      });
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const employeeId = registerData.map((emp) => emp.Employee_ID_Number);
    const employeePassword = registerData.map((emp) => emp.Password);
    if (registerData && !employeeId.includes(emp_id)) {
      alert("Enter valid Employee ID");
    } else if (!employeePassword.includes(password)) {
      alert("Enter valid Password");
    } else {
      if (loginData) {
        setToken("Login Successfull");
        navigate("/home");
      }
      else alert("login Unsuccessfull")
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Log-In</h1>
        <label htmlFor="emp_id">Employee ID</label>
        <input
          type="number"
          id="emp_id"
          name="emp_id"
          placeholder="Enter Employee Id"
          onChange={(e) => setEmp_id(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Submit" />
        <p>*Dont have credentials register before login</p>
        <Link className="Register-button" to="/registration">
          <input type="button" value="Register" />
        </Link>
      </form>
    </div>
  );
}
export default Login;
