/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import classes from "../styles/Vedio.module.css";
const Vedio = ({ title, noq, id }) => {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt="image"
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Vedio;
