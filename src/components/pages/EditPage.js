import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: "",
    password: "",
    first_name: "",
    designation: "",
  });

  const { password, first_name, designation } = employee;

  const handleChange = (event) => {
    event.preventDefault();
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3001/employees/${id}`);
      setEmployee(result.data);
    };
    loadUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/employees/${id}`, employee);
    navigate("/home");
  };

  return (
    <div>
      <h2 className="registration-header">
        <button className="back-button">
          <Link className="link" to="/home">
            Back to Home
          </Link>
        </button>
        Edit Page
      </h2>
      <form className="registration-form-container" onSubmit={handleUpdate}>
        <label>{id}</label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={first_name}
          onChange={(e) => handleChange(e)}
        />
        <select
          type="dropdown"
          placeholder="Designation"
          name="designation"
          value={designation}
          onChange={(e) => handleChange(e)}
        >
          <option value="developer">Developer</option>
          <option value="manager">Manager</option>
        </select>
        <input className="register-button" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditPage;
