import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  let user = localStorage.getItem("user-info");
  console.log(user);
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/register");
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="App">
        <Navbar.Brand className="text-light">
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
            WOLVERHAMPTON UNIVERSITY
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Nav.Link className="text-light">
                  <Link
                    to="/add"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
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
              </>
            ) : (
              <>
                <Nav.Link className="text-light">
                  <Link
                    to="/login"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link
                    to="/register"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user} id="nav-dropdown">
                <NavDropdown.Item id="nav-dropdown1" onClick={logout}>
                  {" "}
                  Logout{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <button className="smiley">🏫</button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
