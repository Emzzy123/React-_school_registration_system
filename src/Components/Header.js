import React, { Component } from "react";
import "./Header.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="App">
          <ReactBootStrap.Navbar.Brand href="#home" className="text-light">
            SCHOOL REGISTRATION SYSTEM
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav.Link className="text-light">
              <Link
                to="/login"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Login
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="text-light">
              <Link
                to="/register"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Register
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="text-light">
              <Link to="/add" style={{ color: "#fff", textDecoration: "none" }}>
                Add Student
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="text-light">
              <Link
                to="/student"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Student List
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#memes" className="text-light">
              Search Student
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Header;
