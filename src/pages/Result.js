import React from "react";
import Analysis from "../components/Analysis";
import Answers from "../components/Answers";
import Summary from "../components/Summary";

const Result = () => {
  return (
    <div>
      <Summary />
      <Analysis />
      <Answers />
    </div>
  );
};

export default Result;
