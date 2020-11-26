import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink onClick={logout} to="/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span onClick={logout} className="hide-sm">
            Logout
          </span>{" "}
        </NavLink>
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <NavLink to="/">Developers</NavLink>
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

export default connect(mapStateToProps, logout)(Navbar);
