import React from "react";
// import { FormContext } from "../../FormContext";

const Date = ({ questionid, question }) => {
  // const { handleChange } = useContext(FormContext);
  return (
    <div>
      <p>{question}</p>
      <input
        type="date"
        id={questionid}
        name={question}
        // onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Date;
