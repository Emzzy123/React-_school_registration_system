import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import AddStudent from "./Components/AddStudent";
import StudentList from "./Components/StudentList";

import Axios from "axios";
import qs from "qs";
import EditModal from "./Components/EditModal";

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

  clicklogout = (e) => {
    localStorage.clear();
    this.setState({
      logged_in: !this.state.logged_in,
      token_isValid: !this.state.token_isValid,
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
                exact
                path="/student"
                render={(props) => (
                  <React.Fragment>
                    <StudentList
                      submitData={this.submitData}
                      usersData={this.state.usersData}
                      deleteData={this.deleteData}
                      updateTableAfterUpdate={this.updateTableAfterUpdate}
                    />
                  </React.Fragment>
                )}
              />
              <Route path="/editstudent" component={() => <EditModal />} />
              <Route path="/login" component={() => <Login />} />
              <Route
                path="/register"
                component={() => (
                  <Register
                  // logged_in={ this.state.logged_in }
                  />
                )}
              />
              <Route
                path="/add"
                component={() => (
                  <AddStudent
                  // logged_in={ this.state.logged_in }
                  />
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
