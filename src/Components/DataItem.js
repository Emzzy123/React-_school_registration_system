import React, { Component } from "react";
import { Link } from "react-router-dom";

class DataItem extends Component {
  clickDelete(id) {
    this.props.deleteData(id);
  }

  render() {
    const { id, name, student_id, course_name, faculty } = this.props.usersData;

    return (
      <tr>
        <td>{name}</td>
        <td>{student_id}</td>
        <td>{course_name}</td>
        <td>{faculty}</td>
        <td>
          <span>
            <Link to={"editstudent/" + id}>
              <span className="update">Update</span>
            </Link>
          </span>
          {/* <span>
            <strong>|</strong>
          </span> */}
          <span>
            <span onClick={(e) => this.clickDelete(id)} className="delete">
              Delete
            </span>
          </span>
        </td>
      </tr>
    );
  }
}

export default DataItem;
