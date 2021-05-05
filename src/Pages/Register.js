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

    // axios
    //   .post(
    //     "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/students",
    //     this.state
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const rest = await axios.get("/user/students");
    // console.log(rest);

    const rest = await axios.post("user/students", { ...this.state });
    console.log(rest);

    // let url =
    //   "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/index";
    // let data = this.state;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((result) => {
    //   result.json().then((resp) => {
    //     console.warn("resp", resp);
    //   });
    // });
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
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
            className="form-control"
            placeholder="password"
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
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
