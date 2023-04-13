import React from "react";
import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="hello" />
      <Checkbox className={classes.answer} text="hello" />
      <Checkbox className={classes.answer} text="hello" />
      <Checkbox className={classes.answer} text="hello" />
      <Checkbox className={classes.answer} text="hello" />{" "}
      <Checkbox className={classes.answer} text="hello" />
    </div>
  );
};

export default Answers;
