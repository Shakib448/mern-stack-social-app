import React, { useEffect } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../redux/actions/profile";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardAction />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <p>You have not yet setup a profile, please add some info</p>{" "}
          <Link to="create-profile" className="btn btn-primary my-1">
            {" "}
            Create Profile
          </Link>
        </>
      )}
    </>
  );
};

Dashboard.prototype = {
  getCurrentProfile: propType.func.isRequired,
  auth: propType.object.isRequired,
  profile: propType.object.isRequired,
  deleteAccount: propType.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
