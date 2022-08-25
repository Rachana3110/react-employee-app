import React from "react";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "./RegisterConfig";

const TestConfigFile = () => {
  return (
    <div>
      {RegisterConfig.Registration_Questions.map(questions=>{
        return(
          <FormElement questions={questions}/>
        )
      })}
    </div>
  );
};

export default TestConfigFile;
