import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./From";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <From style={{ height: "520px" }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confrim password"
        icon="lock_clock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox text="I agree to the Terms & Conditions" />
      {error && <p className="error">{error}</p>}
      <Button type="submit">Login</Button>
      <div className="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </From>
  );
};

export default LoginForm;
