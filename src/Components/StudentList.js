import React, { Component } from "react";
import UserTable from "./UserTable";

export class StudentList extends Component {
  render() {
    return (
      <section className="section">
        <br />
        <UserTable
          usersData={this.props.usersData}
          deleteData={this.props.deleteData}
          updateTableAfterUpdate={this.props.updateTableAfterUpdate}
        />
      </section>
    );
  }
}

export default StudentList;
