import React, { Component } from "react";
import Axios from "axios";
import qs from "qs";

class AddStudent extends Component {
  state = {
    name: "",
    student_id: "",
    course_name: "",
    faculty: "",
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
      student_id: this.state.student_id,
      course_name: this.state.course_name,
      faculty: this.state.faculty,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/addstudent",
      qs.stringify(params)
    ).then((resp) => {
      console.log(resp);
    });
    alert("Registration Successful");
  };

  render() {
    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1>Add New Student</h1>
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
              name="student_id"
              value={this.state.student_id}
              onChange={this.onChange}
              placeholder="student id"
            />
            <br />
            <input
              className="input form-control"
              type="text"
              name="course_name"
              value={this.state.course_name}
              onChange={this.onChange}
              placeholder="course name"
            />
            <br />
            <input
              className="input form-control"
              type="text"
              name="faculty"
              value={this.state.faculty}
              onChange={this.onChange}
              placeholder="faculty"
            />
            <br />
            <center>
              <button className="btn btn-success">Add Student</button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudent;
