import React from "react";
import singupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={singupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
