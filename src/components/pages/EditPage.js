import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = ({ handleUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    password: "",
    first_name: "",
    designation: "",
  });

  const { password, first_name, designation } = employee;

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
      <form className="" onSubmit={() => handleUpdate(id, employee)}>
        <label>Employee Id : </label>
        {id}
        <br />
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={first_name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Designation</label>
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
        <br />
        <input className="register-button" type="submit" value="Update" />
      </form>
      <input
        className="back-button"
        type="button"
        value="Back"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default EditPage;
