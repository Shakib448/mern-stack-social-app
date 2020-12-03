import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../Layout/Spinner";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Post = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm />
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

export default connect(mapStateToProps, { getPosts })(Post);
