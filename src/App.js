import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddStudent from "./Pages/AddStudent";
import UpdateStudent from "./Pages/UpdateStudent";
import Footer from "./Components/Footer";
import {} from "react-bootstrap";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/add" exact component={AddStudent} />
            <Route path="/update" component={UpdateStudent} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
