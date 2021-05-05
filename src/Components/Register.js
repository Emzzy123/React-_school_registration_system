import Navbar from "./Navbar";
import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const history = useHistory();

  async function submitHandler() {
    const form = document.querySelector("form");
    var data = new FormData(form);

    axios({
      method: "post",
      url:
        "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/add_student",
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
  }

  return (
    <>
      <Navbar />
      <form onSubmit={submitHandler}>
        <div className="col-sm-6 offset-sm-3">
          <h1>Student Registration Page</h1>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
          />
          <br />
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;