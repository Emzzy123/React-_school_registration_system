import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  async function login() {
    const form = document.querySelector("form");
    var data = new FormData(form);

    axios({
      method: "post",
      url:
        "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/login",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    localStorage.setItem("user-info", json);
    history.push("/add");
  }

  return (
    <div>
      <form onSubmit={login}>
        <Navbar />
        <div className="col-sm-6 offset-sm-3">
          <br />
          <center>
            <h1>Login Page</h1>
          </center>
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            class="form-control"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            class="form-control"
          />
          <br />
          <center>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Login;
