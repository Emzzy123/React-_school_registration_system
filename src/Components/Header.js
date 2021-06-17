import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="App">
        <Navbar.Brand className="text-light">
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            WOLVERHAMPTON UNIVERSITY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar_wrapper">
            <Nav.Link className="text-light">
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                Add Student
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light">
              <Link
                to="/student"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Student List
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light">
              <Link
                to="/editstudent"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Update Student
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light">
              <Link
                to="/searchstudent"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Student Record
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
