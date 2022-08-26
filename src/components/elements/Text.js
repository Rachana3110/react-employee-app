import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Text = ({ questionid, required }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <input
        type="text"
        id={questionid}
        required={required}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Text;
