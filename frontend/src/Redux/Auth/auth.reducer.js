import * as types from "./auth.actionType";

const initialState = {
  user: null,
  admin: null,
  isLoading: false,
  isError: false,
};

const authReducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // USER-LOGIN
    case types.USER_LOGIN_REQUEST:
      return { ...oldState, isLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        user: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    // USER-SIGNUP
    case types.USER_SIGNUP_REQUEST:
      return { ...oldState, isLoading: true };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        user: payload,
      };
    case types.USER_SIGNUP_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    // ADMIN-LOGIN
    case types.ADMIN_LOGIN_REQUEST:
      return { ...oldState, isLoading: true };
    case types.ADMIN_LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        admin: payload,
      };
    case types.ADMIN_LOGIN_FAILURE:
      return { ...oldState, isLoading: false, isError: true };

    // Default
    default:
      return oldState;
  }
};

export default authReducer;
