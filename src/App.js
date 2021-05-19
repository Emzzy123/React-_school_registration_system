import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import AddStudent from "./Components/AddStudent";
import StudentList from "./Components/StudentList";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Header
            // logged_in={this.state.logged_in}
            // clicklogout={this.clicklogout}
            />
            <Switch>
              <Route
                path="/login"
                component={() => (
                  <Login
                  // submitLogin={this.submitLogin}
                  // logged_in={this.state.logged_in}
                  />
                )}
              />
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
              <Route
                path="/student"
                component={() => (
                  <StudentList
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
