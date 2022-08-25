import React from "react";
// import { FormContext } from "../../FormContext";

const Textarea = ({ questionid, question }) => {
  // const { handleChange } = useContext(FormContext);
  return (
    <div>
      <p>{question}</p>
      <textarea
        id={questionid}
        name={question}
        // onChange={(event) => handleChange(questionid, event)}
      />
    </div>
  );
};

export default Textarea;
