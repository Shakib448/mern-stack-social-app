import React, { useEffect } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profile";

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return <div>Dashboard</div>;
};

Dashboard.prototype = {
  getCurrentProfile: propType.func.isRequired,
  auth: propType.object.isRequired,
  profile: propType.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
