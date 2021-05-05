import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  function submitHandler() {
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
    // localStorage.setItem("user-info", JSON.stringify(data));
    history.push("/add");
  }

  return (
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
  );
}

export default Register;
