import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink to="/profiles">Developers</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <i className="fas fa-user" />{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span style={{ cursor: "pointer" }} className="hide-sm">
            Logout
          </span>
        </a>
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <NavLink to="/profiles">Developers</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">
          <i className="fas fa-code"></i> DevConnector
        </NavLink>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLink}</>}
    </nav>
  );
};

Navbar.prototype = {
  logout: propTypes.func.isRequired,
  auth: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
