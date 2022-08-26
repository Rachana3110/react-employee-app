import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Date = ({ questionid, required }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <input
        type="date"
        id={questionid}
        required={required}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Date;
