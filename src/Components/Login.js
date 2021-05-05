import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
