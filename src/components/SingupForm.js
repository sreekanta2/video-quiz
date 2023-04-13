import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./From";
import TextInput from "./TextInput";

const SingupForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState();

  let navigate = useNavigate();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, userName);
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
        type="text"
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Confrim password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        type="checkbox"
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <Button>Submit Now</Button>
      <div className="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </From>
  );
};

export default SingupForm;
