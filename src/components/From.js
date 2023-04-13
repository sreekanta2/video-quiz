import React from "react";
import classes from "../styles/From.module.css";

const From = ({ className, children, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default From;
