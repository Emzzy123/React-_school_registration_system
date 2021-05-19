import "./Navbar.css";
import { useState } from "react";
import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/Register");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#951b1e" }}>
        <div className="navbar sticky">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              onClick={showSidebar}
              onMouseOver={({ target }) => (target.style.color = "black")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </Link>
          <Link to="/" className="navmenubar">
            <h1 className="heading">School Registration System</h1>
          </Link>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name} id="nav-dropdown">
                <NavDropdown.Item id="nav-dropdown1" onClick={logout}>
                  {" "}
                  Logout{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <button className="smiley">🏫</button>
          )}
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <IconContext.Provider value={{ color: "black" }}>
                <Link to="#" className="menu-bars">
                  <FaIcons.FaWindowClose
                    onMouseOver={({ target }) => (target.style.color = "white")}
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </Link>
              </IconContext.Provider>
            </li>
            {localStorage.getItem("user-info") ? (
              <div className="listdiv">
                <p>
                  <Link
                    to="/"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Student List
                  </Link>
                </p>
                <p>
                  <Link
                    to="/add"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Add Student
                  </Link>
                </p>
                <p>
                  <Link
                    to="/update"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Update Student
                  </Link>
                </p>
                <p>
                  <Link
                    to="/search"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Search Student
                  </Link>
                </p>
              </div>
            ) : (
              <div className="listdiv">
                <p>
                  <Link
                    to="/login"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </p>
                <p>
                  <Link
                    to="/register"
                    style={{ color: "#951b1e", textDecoration: "none" }}
                  >
                    Register Student
                  </Link>
                </p>
              </div>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
