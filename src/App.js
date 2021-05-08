import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddStudent from "./Components/AddStudent";
import UpdateStudent from "./Components/UpdateStudent";
import Footer from "./Components/Footer";
import Protected from "./Components/Protected";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/add">
              <Protected Cmp={AddStudent} />
            </Route>
            <Route path="/update">
              <Protected Cmp={UpdateStudent} />
            </Route>
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
