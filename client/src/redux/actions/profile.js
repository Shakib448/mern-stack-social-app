import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./type";

// Get current user profiles

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Create and update profile

export const createProfile = (fromData, history, edit = false) => async (
  dispatch
) => {
  try {
    const res = await axios.post("/api/profile", fromData);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (err) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Add Experience

export const addExperience = (fromData, history) => async (dispatch) => {
  try {
    const res = await axios.put("/api/profile/experience", fromData);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (err) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Add Education

export const addEducation = (fromData, history) => async (dispatch) => {
  try {
    const res = await axios.put("/api/profile/education", fromData);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (err) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data.msg,
        server: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
