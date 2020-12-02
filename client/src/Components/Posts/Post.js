import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/post";

const Post = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return <></>;
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
