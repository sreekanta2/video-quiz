import React from "react";
import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/Authcontext";
const Login = () => {
  const { login } = useAuth();
  console.log(login);
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
