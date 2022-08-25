import React from 'react'

const Number = ({ questionid, question }) => {
  return (
    <div>
      <p>{question}</p>
      <input type="number" id={questionid} />
    </div>
  );
};

export default Number
