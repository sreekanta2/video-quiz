import React from "react";
import classes from "../styles/Analysis.module.css";
const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
    </div>
  );
};

export default Question;
