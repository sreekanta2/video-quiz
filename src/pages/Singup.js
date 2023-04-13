import React from "react";
import Illustration from "../components/Illustration";
import SingupForm from "../components/SingupForm";
const Singup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SingupForm />
      </div>
    </>
  );
};

export default Singup;
