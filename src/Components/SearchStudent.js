import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import qs from "qs";

class SearchStudent extends Component {
  state = {
    name: "",
    persons: [],
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
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/search",
      qs.stringify(params)
    ).then((resp) => {
      const persons = resp.data;
      this.setState({ persons });
    });
  };

  render() {
    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <br />
          <center>
            <h1>Search Student Record</h1>
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
            <center>
              <button className="btn btn-success">Search Student</button>
            </center>
          </form>
          <br />
          <Table>
            <tr style={{ color: "#ba0d2a" }}>
              <td>
                <strong>ID</strong>
              </td>
              <td>
                <strong>NAME</strong>
              </td>
              <td>
                <strong>STUDENT ID</strong>
              </td>
              <td>
                <strong>COURSE NAME</strong>
              </td>
              <td>
                <strong>FACULTY</strong>
              </td>
            </tr>
            {this.state.persons.map((person) => (
              <tr>
                <td key={person.id}>{person.id}</td>
                <td key={person.name}>{person.name}</td>
                <td key={person.student_id}>{person.student_id}</td>
                <td key={person.course_name}>{person.course_name}</td>
                <td key={person.faculty}>{person.faculty}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default SearchStudent;
