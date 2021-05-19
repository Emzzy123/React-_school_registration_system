import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import qs from "qs";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const params = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/register",
      qs.stringify(params)
    ).then((resp) => {
      console.log(resp);
    });
  };

  render() {
    // if (this.props.logged_in) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <center>
            <h1>School Registration Page</h1>
          </center>
          <br />
          <form onSubmit={this.onSubmit}>
            <input
              className="input form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="name"
            />
            <br />
            <input
              className="input form-control"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="email"
            />
            <br />
            <input
              className="input form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="password"
            />
            <br />
            <center>
              <button className="btn btn-success">Register</button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
