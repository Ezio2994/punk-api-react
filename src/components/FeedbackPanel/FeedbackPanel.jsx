import React from "react";
import styles from "./FeedbackPanel.module.scss";

const FeedbackPanel = (props) => {
  const {header, text} = props
  return (
    <>
      <h1>{header}</h1>
      <p>{text}</p>
    </>
  );
};

export default FeedbackPanel;
