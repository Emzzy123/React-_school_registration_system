import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
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
    this.props.submitLogin(this.state.username, this.state.password);
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
            <h1>School Login Page</h1>
          </center>
          <br />
          <form onSubmit={this.onSubmit}>
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
              <button className="btn btn-primary">Login</button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
