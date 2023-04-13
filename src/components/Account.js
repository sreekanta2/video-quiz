import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import classes from "../styles/Account.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      <span>{currentUser?.displayName}</span>

      {!currentUser && (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle{" "}
          </span>

          <Link to="singup">Signup</Link>
          <Link to="login">Login</Link>
        </>
      )}

      {currentUser && (
        <span
          className="material-icons-outlined"
          title="Logout"
          onClick={logout}
        >
          logout{" "}
        </span>
      )}
    </div>
  );
};

export default Account;
