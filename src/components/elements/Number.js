import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Number = ({ questionid, required}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <input
        type="number"
        id={questionid}
        required={required}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Number;
