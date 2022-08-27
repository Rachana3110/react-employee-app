import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Dropdown = ({ questionid, questionoption, required }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <select
      id={questionid}
      required={required}
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
    >
      <option value="">Select a value</option>
      {questionoption &&
        questionoption.map((questionoption, i) => {
          return (
            <option id={i} value={questionoption.optionvalue}>
              {questionoption.optionvalue}
            </option>
          );
        })}
    </select>
  );
};

export default Dropdown;
