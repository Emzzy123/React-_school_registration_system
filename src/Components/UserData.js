import React, { Component } from "react";
import DataItem from "./DataItem";

class UserData extends Component {
  render() {
    if (this.props.usersData.length === 0) {
      return (
        <tr>
          <td colSpan="5">No Data Available, Go Add New Student</td>
        </tr>
      );
    }

    return this.props.usersData.map((users) => (
      <DataItem
        key={users.id}
        usersData={users}
        deleteData={this.props.deleteData}
        showData={this.props.showData}
      />
    ));
  }
}

export default UserData;
