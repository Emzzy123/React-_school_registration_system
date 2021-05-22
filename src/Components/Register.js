import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./login.css";
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
    alert("Registration Successful");
  };

  render() {
    if (this.props.logged_in) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <br />
          <center>
            <h1>School Registration Page</h1>
          </center>
          <br />
          <Form onSubmit={this.onSubmit} className="form-container">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-light">Name</Form.Label>
              <input
                className="form-control"
                type="name"
                placeholder="name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-light">Email Address</Form.Label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                <span className="text-light">
                  We'll never share your email with anyone else.
                </span>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
