import Axios from "axios";
import { setAlert } from "./alert";
import { GET_POST, POST_ERROR, REMOVE_LIKES, UPDATE_LIKES } from "./type";

// Get Post

export const getPost = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/posts");

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
  console.log(id);
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
