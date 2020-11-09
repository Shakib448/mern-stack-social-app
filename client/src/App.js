import "./App.css";
import Landing from "./Components/Layout/Landing";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          {/* <section className="container"> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* </section> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
