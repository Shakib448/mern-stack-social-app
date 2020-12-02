import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({ profile }) => {
  return (
    <>
      <h2 className="text-primary">Education</h2>
      {profile.education.length > 0 ? (
        <>
          {profile.education.map(
            ({ _id, school, degree, fieldofstudy, to, from, description }) => (
              <div key={_id}>
                <h3>{school}</h3>
                <p>
                  <Moment format="YYYY/MM/DD">{from}</Moment> -
                  {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
                </p>
                <p>
                  <strong>Degree: </strong>
                  {degree}
                </p>
                <p>
                  <strong>Field Of Study: </strong>
                  {fieldofstudy}
                </p>
                <p>
                  <strong>Description: </strong>
                  {description}
                </p>
              </div>
            )
          )}
        </>
      ) : (
        <h4>No Education Credentials</h4>
      )}
    </>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
