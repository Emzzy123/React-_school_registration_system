import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function Login() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const url =
    "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });

    console.log(data);
    localStorage.setItem("user-info", JSON.stringify(data));
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <form onSubmit={(e) => submit(e)}>
          <center>
            <h1>Login Page</h1>
          </center>
          <br />
          <input
            type="text"
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            className="form-control"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            className="form-control"
            placeholder="password"
          />
          <br />
          <center>
            <button className="btn btn-primary">Sign up</button>
          </center>
        </form>
      </div>
    </>
  );
}

export default Login;
