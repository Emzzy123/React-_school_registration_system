import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signUp() {
    let item = { name, email, password };

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "appplication/json",
      },
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
          <h1>School Registration Page</h1>
        </center>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
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
          <button onClick={signUp} className="btn btn-primary">
            Sign Up
          </button>
        </center>
      </div>
    </div>
  );
}

export default Register;
