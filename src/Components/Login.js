import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./login.css";

export class Login extends Component {
  state = {
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

    this.props.submitLogin(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: "",
    });
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
            <h1>Login Page</h1>
          </center>
          <br />
          <Form onSubmit={this.onSubmit} className="form-container">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
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

export default Login;
