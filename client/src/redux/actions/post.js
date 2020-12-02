import Axios from "axios";
import { setAlert } from "./alert";
import { GET_POST, POST_ERROR } from "./type";

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
