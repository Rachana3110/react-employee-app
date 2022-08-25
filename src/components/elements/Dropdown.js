import React from "react";

const Dropdown = ({ questionid, question, questionoption }) => {
  return (
    <div>
      <p>{question}</p>
      <select id={questionid}>
        {questionoption &&
          questionoption.map((questionoption, i) => {
            return (
              <option id={questionid} value={question}>
                {questionoption.optionvalue}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Dropdown;
