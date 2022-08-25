import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Textarea = ({ questionid }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <textarea
        id={questionid}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Textarea;
