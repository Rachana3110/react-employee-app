import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Text = ({ questionid }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <input
        type="text"
        id={questionid}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Text;
