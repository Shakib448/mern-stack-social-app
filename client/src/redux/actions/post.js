import Axios from "axios";
import { setAlert } from "./alert";
import {
  DELETE_POST,
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  GET_POST,
} from "./type";

// Get Posts

export const getPosts = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Add Like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await Axios.put("/api/posts/likes/" + id);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Remove Like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await Axios.put("/api/posts/unlike/" + id);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await Axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert("Post Remove", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/posts", formData);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get Post

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await Axios.get("/api/posts/" + id);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
