import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
      return <Redirect to="/add" />;
    }
    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <br />
          <br />
          <br />
          <br />
          <Form onSubmit={this.onSubmit} className="form-container">
            <center>
              <h1 className="text-light">Login</h1>
            </center>
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
            <center>
              {" "}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </center>
            <hr className="bg-light" />
            <Form.Text className="text-muted">
              <span className="text-light font-weight-italic float-right">
                Dont have an account?
                <Link
                  to={"/register"}
                  style={{ color: "#fff", background: "#ba0d2a" }}
                >
                  <span className="text-primary"> Register</span>
                </Link>
              </span>
            </Form.Text>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
