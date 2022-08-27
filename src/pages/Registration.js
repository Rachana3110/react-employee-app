import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { RegisterConfig } from "../config/RegisterConfig";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./css/Registration.css";

const Registration = () => {
  const [apiData, setApiData] = useState();
  const [configData, setConfigData] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3001/api/register").then((response) => {
        setApiData(response.data);
      });
    };
    fetchData();
    setConfigData(RegisterConfig);
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    const postData = async () => {
      await axios
        .post("http://localhost:3001/api/register", {
          Employee_ID_Number: configData[0].Employee_ID_Number,
          Password: configData[1].Password,
          First_Name: configData[3].First_Name,
          Middle_Name: configData[4].Middle_Name,
          Last_Name: configData[5].Last_Name,
          Date_of_Birth: configData[6].Date_of_Birth,
          Phone_Number: configData[7].Phone_Number,
          Address: configData[8].Address,
          Postal_Code: configData[9].Postal_Code,
          Qualification: configData[10].Qualification,
          Total_Experience: configData[11].Total_Experience,
          Start_Date_Date: configData[12].Start_Date_Date,
          End_Date_Date: configData[13].End_Date_Date,
          Type_of_Employee: configData[14].Type_of_Employee,
          Designation: configData[15].Designation,
          Gender: configData[16].Gender,
          Marital_Status: configData[17].Marital_Status,
        })
        .then((response) => {
          setApiData(response.data);
        });
    };

    if (
      apiData
        .map((p, i) => p.Employee_ID_Number)
        .includes(configData[0].Employee_ID_Number)
    ) {
      setError(true);
      setErrorMsg("Id already exist");
    } else if (configData[1].Password !== configData[2].Re_Type_Password) {
      setError(true);
      setErrorMsg("Password doesn't match");
    } else {
      postData();
      navigate("/");
    }
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    const newData = [...configData];
    newData.forEach((question) => {
      const { questionid } = question;
      if (id === questionid) {
        question[question.questionname] = event.target.value;
        setConfigData(newData);
      }
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <h2 className="registration-header">
        <button className="back-button">
          <Link className="link" to="/">
            Back to Login{" "}
          </Link>
        </button>
        Registration Page
      </h2>
      <form className="registration-form-container" onSubmit={handleRegister}>
        {RegisterConfig.map((questions, i) => {
          return (
            <div key={i}>
              <label className="question-label">{questions.question}</label>
              <FormElement questions={questions} />
            </div>
          );
        })}
        {error && <div className="error-msg">*{errorMsg}</div>}
        <input className="register-button" type="submit" value="Register" />
      </form>
    </FormContext.Provider>
  );
};

export default Registration;
