import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import { getGithubRepos } from "../../redux/actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);
  return (
    <>
      {repos.length === 0 && <h1> No github repositories</h1>}
      {repos.map(
        ({
          id,
          name,
          description,
          stargazers_count,
          watchers_count,
          forks_count,
        }) => (
          <div key={id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={`https://github.com/Shakib448/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </h4>
              <p>{description ? { description } : "No description yet"}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars: {stargazers_count}
                </li>
                <li className="badge badge-dark">Watchers: {watchers_count}</li>
                <li className="badge badge-light">Forks: {forks_count}</li>
              </ul>
            </div>
          </div>
        )
      )}
    </>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
