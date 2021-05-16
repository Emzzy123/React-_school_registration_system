import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddStudent from "./Components/AddStudent";
import UpdateStudent from "./Components/UpdateStudent";
import Footer from "./Components/Footer";
import Protected from "./Components/Protected";
import StudentList from "./Components/StudentList";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route path="/login">
              {" "}
              <Login />{" "}
            </Route>
            <Route path="/register">
              {" "}
              <Register />{" "}
            </Route>
            <Route path="/add">
              <Protected Cmp={AddStudent} />
            </Route>
            <Route path="/update/:id">
              <Protected Cmp={UpdateStudent} />
            </Route>
            <Route path="/">
              <Protected Cmp={StudentList} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
