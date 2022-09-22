import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./css/EditPage.css";
import FormInputs from "../helpers/FormInputs";
import inputs from "../data/inputs";

const EditPage = ({ handleUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});

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
        <h2 className="registration-header">Edit Profile</h2>
        {inputs.map((input, i) => {
          return (
            <FormInputs
              key={input.id}
              {...input}
              value={employee[input.name]}
              option={input.options}
              type={input.type}
              onChange={handleChange}
            />
          );
        })}
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
