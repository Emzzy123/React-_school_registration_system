import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./Components/Protected";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
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
    logged_in: false,
    token_isValid: false,
  };

  componentDidMount() {
    this.showData();
    this.LoggedIn();
  }
  LoggedIn() {
    var token = localStorage.getItem("token");
    var userinfo = localStorage.getItem("user-info");
    this.checkToken(token);
  }

  checkToken = (token) => {
    const params = {
      token: token,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/check-token",
      qs.stringify(params)
    ).then((resp) => {
      if (resp.data.valid === true) {
        this.setState({
          token_isValid: !this.state.token_isValid,
          logged_in: !this.state.logged_in,
        });
      }
    });
  };

  submitLogin = (email, password) => {
    const params = {
      email: email,
      password: password,
    };

    Axios.post(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/login",
      qs.stringify(params)
    ).then((resp) => {
      if (resp.data.logged_in === true && resp.data.token !== "") {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user-info", resp.data.name);
        this.setState({
          token_isValid: !this.state.token_isValid,
          logged_in: !this.state.logged_in,
        });
      }
    });
  };

  showData() {
    Axios.get(
      "https://mi-linux.wlv.ac.uk/~2024684/ci3_restapi/index.php/user/students"
    ).then((resp) => this.setState({ usersData: resp.data }));
  }

  updateTableAfterUpdate = (e) => {
    this.showData();
  };

  clicklogout = (e) => {
    localStorage.clear();
    this.setState({
      logged_in: !this.state.logged_in,
      token_isValid: !this.state.token_isValid,
    });
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
            <Header
              logged_in={this.state.logged_in}
              clicklogout={this.clicklogout}
            />
            <Switch>
              <Route
                exact
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
              <Route
                path="/editstudent"
                component={() => <EditModal usersData={this.state.usersData} />}
              />
              <Route
                path="/login"
                component={() => (
                  <Login
                    submitLogin={this.submitLogin}
                    logged_in={this.state.logged_in}
                  />
                )}
              />
              <Route
                path="/register"
                component={() => <Register logged_in={this.state.logged_in} />}
              />
              <Route path="/add" component={() => <AddStudent />} />
              <Route
                path="/searchstudent"
                component={() => (
                  <SearchStudent usersData={this.state.usersData} />
                )}
              />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
