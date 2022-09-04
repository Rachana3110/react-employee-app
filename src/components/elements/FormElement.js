import React from "react";
import Date from "./Date";
import Textarea from "./Textarea";
import Text from "./Text";
import Password from "./Password";
import Dropdown from "./Dropdown";
import Number from "./Number";

const Element = ({
  questions: {
    questionid,
    questionname,
    question,
    questiontype,
    questionoption,
    required,
  },
}) => {
  switch (questiontype) {
    case "Number":
      return (
        <Number
          questionid={questionid}
          question={question}
          questionname={questionname}
          required={required}
        />
      );
    case "Text":
      return (
        <Text
          questionid={questionid}
          questionname={questionname}
          question={question}
          required={required}
        />
      );
    case "Password":
      return (
        <Password
          questionid={questionid}
          questionname={questionname}
          question={question}
          required={required}
        />
      );
    case "Textarea":
      return (
        <Textarea
          questionid={questionid}
          questionname={questionname}
          question={question}
          required={required}
        />
      );
    case "Date":
      return (
        <Date
          questionid={questionid}
          questionname={questionname}
          question={question}
          required={required}
        />
      );
    case "Dropdown":
      return (
        <Dropdown
          questionid={questionid}
          questionname={questionname}
          questionoption={questionoption}
          required={required}
        />
      );
    default:
      return null;
  }
};

export default Element;
