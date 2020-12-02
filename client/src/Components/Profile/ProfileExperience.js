import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({ profile }) => {
  return (
    <>
      <h2 className="text-primary">Experience</h2>
      {profile.experience.length > 0 ? (
        <>
          {profile.experience.map(
            ({ _id, company, title, location, to, from, description }) => (
              <div key={_id}>
                <h3 className="text-dark">{company}</h3>
                <p>
                  <strong>Location: </strong>
                  {location}
                </p>
                <p>
                  <Moment format="YYYY/MM/DD">{from}</Moment> -
                  {!to ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
                </p>
                <p>
                  <strong>Position: </strong>
                  {title}
                </p>

                <p>
                  <strong>Description: </strong> {description}
                </p>
              </div>
            )
          )}
        </>
      ) : (
        <h4>No Experience Credentials</h4>
      )}
    </>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
