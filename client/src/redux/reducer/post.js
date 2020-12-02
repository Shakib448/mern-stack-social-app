import { GET_POST, POST_ERROR } from "../actions/type";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const post = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default post;
