import React from 'react'

const Password = ({ questionid, question }) => {
  return (
    <div>
      <p>{question}</p>
      <input type="password" id={questionid} />
    </div>
  );
};

export default Password
