import "./App.css";
import Landing from "./Components/Layout/Landing";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Alert from "./Components/Layout/Alert";
import setAuthToken from "./ulits/utilsAuthToken";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/auth";
import store from "./redux/store/store";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/Routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
