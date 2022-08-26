import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Textarea = ({ questionid, required }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <textarea
        id={questionid}
        required={required}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Textarea;
