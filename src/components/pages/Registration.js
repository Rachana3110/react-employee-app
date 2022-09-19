import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import inputs from "../data/inputs";
import FormInputs from "../helpers/FormInputs";
import "./css/Registration.css";

const TestRegistration = ({ handleRegister }) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    address: "",
    qualification: "",
    total_experience: "",
    postal_code: "",
    project: "",
    start_date: "",
    type_of_employee: "",
    designation: "",
    gender: "",
    marital_status: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setEmployees({ ...employees, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        className="registration-form-container"
        onSubmit={(event) => handleRegister(event, employees)}
      >
        <h2 className="registration-header">Registration Page</h2>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            option={input.options}
            type={input.type}
            onChange={handleChange}
          />
        ))}
        <input className="register-button" type="submit" value="Register" />
        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
      </form>
    </div>
  );
};

export default TestRegistration;
