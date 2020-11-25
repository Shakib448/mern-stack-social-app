import uuid from "uuid";
import { SET_ALERT } from "./type";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });
};
