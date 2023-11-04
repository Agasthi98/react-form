import React from "react";
import "../styles/react-form.scss";

const Message = ({ message }) => {
  return <div className="msg text-center">{message}</div>;
};

export default Message;
