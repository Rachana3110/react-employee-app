import React from "react";
import Date from "./elements/Date";
import Textarea from "./elements/Textarea";
import Text from "./elements/Text";
import Password from "./elements/Password";
import Dropdown from "./elements/Dropdown";
import Number from "./elements/Number";

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
