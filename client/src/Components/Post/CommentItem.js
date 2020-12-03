import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { deleteComment } from "../../redux/actions/post";

const CommentItem = ({
  deleteComment,
  auth,
  postId,
  comment: { _id, text, name, avatar, user, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted On <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => deleteComment(postId, _id)}
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
