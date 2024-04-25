import axios from "axios";
import * as types from "./auth.actionType";

// User Login (POST)
export const userLogin = (payload) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });

  try {
    let res = await axios.post(
      `https://calm-tutu-bass.cyclic.app/user/login`,
      payload
    );
    dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE, payload: error });
  }
};

// User SignUp (POST)
export const userSignUp = (payload) => async (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });

  try {
    let res = await axios.post(
      `https://calm-tutu-bass.cyclic.app/user/register`,
      payload
    );
    dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.USER_SIGNUP_FAILURE, payload: error });
  }
};

// Admin Login (POST)
export const adminLogin = (payload) => async (dispatch) => {
  dispatch({ type: types.ADMIN_LOGIN_REQUEST });

  try {
    let res = await axios.post(
      `https://calm-tutu-bass.cyclic.app/admin/login`,
      payload
    );
    dispatch({ type: types.ADMIN_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADMIN_LOGIN_FAILURE, payload: error });
  }
};
