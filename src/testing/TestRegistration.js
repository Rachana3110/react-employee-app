import React, { useEffect, useState } from "react";
import axios from "axios";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "../config/RegisterConfig";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../helpers/formContext";

const TestRegistration = () => {
  const [configData, setConfigData] = useState();
  const [apiData, setApiData] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3001/api/employeedata")
        .then((response) => {
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
        .post("http://localhost:3001/api/employeedata", {
          Employee_No: 1,
          Employee_Data: configData,
        })
        .then((response) => {
          setApiData(response.data);
        });
    };
    if (configData[1].questionvalue !== configData[2].questionvalue) {
      setError(true);
      setErrorMsg("Password doesn't match");
    } else {
      postData();
      navigate("/");
    }
  };

  if (apiData) {
    // console.log(apiData);
  }

  const handleChange = (id, event) => {
    event.preventDefault();
    const newData = [...configData];
    newData.forEach((question) => {
      const { questionid } = question;
      if (id === questionid) {
        question["questionvalue"] = event.target.value;
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
        {configData &&
          configData.map((questions, i) => {
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

export default TestRegistration;
