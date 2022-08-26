import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Date = ({ questionid, required }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <input
      type="date"
      id={questionid}
      required={required}
      onChange={(event) => handleChange(questionid, event)}
      min="1980-04-01"
      max="2025-04-30"
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

export default Date;
