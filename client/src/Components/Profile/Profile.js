import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import { getProfileById } from "../../redux/actions/profile";
import { Link, useParams } from "react-router-dom";
import ProfileTop from "./ProfileTop";

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  let { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);
  return (
    <>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back To Profile
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                {" "}
                Edit Profile
              </Link>
            )}
          <div class="profile-grid my-1">
            <ProfileTop profile={profile} />
          </div>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
