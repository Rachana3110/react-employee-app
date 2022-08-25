import React, { useContext } from "react";
import { FormContext } from "../../helpers/formContext";

const Password = ({ questionid }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <input
        type="password"
        id={questionid}
        onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Password;
