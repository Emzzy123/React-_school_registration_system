import "./Navbar.css";
import { useState } from "react";
import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#951b1e" }}>
        <div className="navbar">
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
          <Button className="bg-white text-dark font-weight-bold">SRS</Button>
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
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
