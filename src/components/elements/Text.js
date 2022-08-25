import React from "react";

const Text = ({ questionid, question }) => {
  return (
    <div>
      <p>{question}</p>
      <input type="text" id={questionid} />
    </div>
  );
};

export default Text;
