import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { RegisterConfig } from "../config/RegisterConfig";
// import axios from "axios";

const TestConfigFile = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(RegisterConfig);
    console.log(RegisterConfig)
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.post("http://localhost:3001/api/register",{data}).then((response) => {
    //     setData(response.data);
    //   });
    console.log(data);
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    const newData = { ...data };

    newData.Registration_Questions.forEach((question) => {
      const { questionid } = question;
      if (id === questionid) {
        question["changeddata"] = event.target.value;
        setData(newData);
      }
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <form onSubmit={handleSubmit}>
        {RegisterConfig.Registration_Questions.map((questions) => {
          return <div>
            <p>{questions.question}</p>
            <FormElement questions={questions} />
          </div>;
        })}
        <input type="submit" value="submit" />
      </form>
    </FormContext.Provider>
  );
};

export default TestConfigFile;
