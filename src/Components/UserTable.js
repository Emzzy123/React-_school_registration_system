import React, { Component } from "react";
import UserData from "./UserData";
import { table } from "react-bootstrap";

class UserTable extends Component {
  render() {
    return (
      <div>
        <div className="col-sm col-md col-lg offset">
          <table className="table table-hover table-stripped table-responsive-lg">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Course Name</th>
                <th>Faculty</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <UserData
                usersData={this.props.usersData}
                deleteData={this.props.deleteData}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserTable;
