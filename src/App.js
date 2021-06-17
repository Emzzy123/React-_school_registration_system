import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddStudent from "./Components/AddStudent";
import StudentList from "./Components/StudentList";
import EditModal from "./Components/EditModal";
import SearchStudent from "./Components/SearchStudent";

import Axios from "axios";
import qs from "qs";

class App extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    this.showData();
  }

  showData() {
    Axios.get(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/students"
    ).then((resp) => this.setState({ usersData: resp.data }));
  }

  updateTableAfterUpdate = (e) => {
    this.showData();
  };

  submitData = (name, student_id, course_name, faculty) => {
    const params = {
      name: name,
      student_id: student_id,
      course_name: course_name,
      faculty: faculty,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/addstudent",
      qs.stringify(params)
    ).then((resp) => {
      this.showData();
    });
  };

  deleteData = (id) => {
    const that = this;
    const params = {
      id: id,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/delete",
      qs.stringify(params)
    )
      .then((resp) => {
        that.showData();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Header />
            <Switch>
              <Route
                path="/student"
                render={(props) => (
                  <React.Fragment>
                    <StudentList
                      submitData={this.submitData}
                      usersData={this.state.usersData}
                      deleteData={this.deleteData}
                      updateTableAfterUpdate={this.updateTableAfterUpdate}
                      logged_in={this.state.logged_in}
                    />
                  </React.Fragment>
                )}
              />
              <Route path="/editstudent">
                <EditModal />
              </Route>
              <Route path="/searchstudent">
                <SearchStudent />
              </Route>
              <Route path="/">
                <AddStudent />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
