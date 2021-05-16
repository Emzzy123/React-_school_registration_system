/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let item = { email, password };

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "appplication/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }

  return (
    <div>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <center>
          <h1>School Login Page</h1>
        </center>
        <br />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <center>
          <button onClick={login} className="btn btn-primary">
            Login
          </button>
        </center>
      </div>
    </div>
  );
}

export default Login;
