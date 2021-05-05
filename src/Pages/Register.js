import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);

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
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div className="col-sm-6 offset-sm-3">
          <h1>Student Registration Page</h1>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
            className="form-control"
            placeholder="name"
          />
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
            className="form-control"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
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
}

export default Register;
