<<<<<<< HEAD
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">School Registration System </Navbar.Brand>
        <Nav className="mr-auto wrapper">
          <Link to="/add">Add Student</Link>
          <Link to="/update">Update Student</Link>
          <Link to="/login">Student Login</Link>
          <Link to="/register">Register Student</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
=======
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">School Registration System </Navbar.Brand>
        <Nav className="mr-auto wrapper">
          <Link to="/add">Add Student</Link>
          <Link to="/update">Update Student</Link>
          <Link to="/login">Student Login</Link>
          <Link to="/register">Register Student</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
>>>>>>> 89e0aeaa6695aab9cdc5626d1ed71fc47114e712
