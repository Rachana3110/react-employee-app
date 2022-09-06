import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./css/EditPage.css";

const EditPage = ({ handleUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    emp_id: "",
    password: "",
    first_name: "",
    designation: "",
  });

  const { emp_id, password, first_name, designation } = employee;

  const handleChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3001/employees/${id}`);
      setEmployee(result.data);
    };
    loadUser();
  }, [id]);

  return (
    <div>
      <form
        className="edit-form-container"
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdate(id, employee);
        }}
      >
        <label className="edit-label">Employee Id </label>
        <input
          className="edit-value"
          type="text"
          placeholder="Enter Employee Id"
          value={emp_id}
          name="id"
        />
        <label className="edit-label">Password</label>
        <input
          className="edit-value"
          type="text"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <label className="edit-label">First Name</label>
        <input
          className="edit-value"
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={first_name}
          onChange={(e) => handleChange(e)}
        />
        <label className="edit-label">Designation</label>
        <select
          className="edit-value"
          type="dropdown"
          placeholder="Designation"
          name="designation"
          value={designation}
          onChange={(e) => handleChange(e)}
        >
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
        </select>
        <input className="update-button" type="submit" value="Update" />
        <input
          className="edit-back-button"
          type="button"
          value="Back"
          onClick={() => navigate("/profile")}
        />
      </form>
    </div>
  );
};

export default EditPage;
