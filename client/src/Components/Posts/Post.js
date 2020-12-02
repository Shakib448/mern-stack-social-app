import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/post";
import PostItem from "./PostItem";

const Post = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="posts">
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
