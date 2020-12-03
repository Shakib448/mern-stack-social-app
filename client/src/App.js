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
import CreateProfile from "./Components/Prfoile_Form/CreateProfile";
import EditProfile from "./Components/Prfoile_Form/EditProfile";
import AddExperience from "./Components/Prfoile_Form/AddExperience";
import AddEducation from "./Components/Prfoile_Form/AddEducation";
import Profiles from "./Components/Profiles/Profiles";
import Profile from "./Components/Profile/Profile";
import Posts from "./Components/Posts/Posts";
import Post from "./Components/Post/Post";
import NotFound from "./Components/NotFound/NotFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/profiles" component={Profiles} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/post/:id" component={Post} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
            <Route exact path="*" component={NotFound} />
          </section>
        </Switch>
      </Router>
    </>
  );
};

export default App;
