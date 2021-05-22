import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import qs from "qs";

class EditModal extends Component {
  state = {
    show: true,
    id: "",
    name: "",
    school_id: "",
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
      id: this.state.id,
      name: this.state.name,
      student_id: this.state.student_id,
      course_name: this.state.course_name,
      faculty: this.state.faculty,
    };
    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/editstudent/",
      qs.stringify(params)
    ).then((resp) => {
      console.log(resp);
    });
    alert("Update Successful");
  };

  handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} backdrop="static">
          <Modal.Header style={{ color: "#fff", background: "#ba0d2a" }}>
            <span className="font-weight">Edit Student</span>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <input
                className="input form-control"
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.onChange}
                placeholder="id"
              />
              <br />
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
              <button type="submit" className="btn btn-success">
                Update Student
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Link
              to={"/student"}
              style={{ color: "#fff", background: "#ba0d2a" }}
              className="editclose"
            >
              <span>Close</span>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
