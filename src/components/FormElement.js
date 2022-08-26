import React from "react";
import Date from "./elements/Date";
import Textarea from "./elements/Textarea";
import Text from "./elements/Text";
import Password from "./elements/Password";
import Dropdown from "./elements/Dropdown";
import Number from "./elements/Number";

const Element = ({
  questions: { questionid, questiontype, questionoption, required },
}) => {
  switch (questiontype) {
    case "Number":
      return <Number questionid={questionid} required={required} />;
    case "Text":
      return <Text questionid={questionid} required={required} />;
    case "Password":
      return <Password questionid={questionid} required={required} />;
    case "Textarea":
      return <Textarea questionid={questionid} required={required} />;
    case "Date":
      return <Date questionid={questionid} required={required} />;
    case "Dropdown":
      return (
        <Dropdown questionid={questionid} questionoption={questionoption} />
      );
    default:
      return null;
  }
};

export default Element;
