import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Password = ({ questionid, question, required }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <input
      type="password"
      id={questionid}
      required={required}
      placeholder={"Enter " + question}
      onChange={(event) => handleChange(questionid, event)}
      style={{
        width: "500px",
        padding: "12px 20px",
        margin: "0px 0px 30px 0px",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
    />
  );
};

export default Password;
