import React from "react";
import Date from "./elements/Date";
import Textarea from "./elements/Textarea";
import Text from "./elements/Text";
import Password from "./elements/Password";
import Dropdown from "./elements/Dropdown";
import Number from "./elements/Number";

const Element = ({
  questions: { questionid, question, questiontype, questionoption },
}) => {
  switch (questiontype) {
    case "Number":
      return <Number questionid={questionid} question={question} />;
    case "Text":
      return <Text questionid={questionid} question={question} />;
    case "Password":
      return <Password questionid={questionid} question={question} />;
    case "Textarea":
      return <Textarea questionid={questionid} question={question} />;
    case "Date":
      return <Date questionid={questionid} question={question} />;
    case "Dropdown":
      return (
        <Dropdown
          questionid={questionid}
          question={question}
          questionoption={questionoption}
        />
      );

    default:
      return null;
  }
};

export default Element;
