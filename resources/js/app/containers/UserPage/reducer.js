import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,

  USER_LOGIN,
  USER_LOGOUT,
} from './constants';

export const initialState = {
  // Register
  isRegisterLoading: false,
  isRegistered: false,
  isRegisterFailed: null,
  // Login
  isLogInLoading: false,
  isLoggedIn: false,
  isLogInFailed: null,
  // user
  currentUser: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Register
    case USER_REGISTER_REQUEST:
      return Object.assign({}, initialState, {
        isRegisterLoading: true,
      });
    case USER_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegisterLoading: false,
        isRegistered: true,
        currentUser: action.payload,
      });
    case USER_REGISTER_FAILED:
      return Object.assign({}, state, {
        isRegisterLoading: false,
        isRegistered: false,
        isRegisterFailed: action.payload,
        currentUser: null,
      });

    // Login
    case USER_LOGIN_REQUEST:
      return Object.assign({}, initialState, {
        isLogInLoading: true,
      });
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLogInLoading: false,
        isLoggedIn: true,
        currentUser: action.payload,
      });
    case USER_LOGIN_FAILED:
      return Object.assign({}, state, {
        isLogInLoading: false,
        isLoggedIn: false,
        isLogInFailed: action.payload,
        currentUser: null,
      });

    // Auth
    case USER_LOGIN:
      return Object.assign({}, initialState, {
        currentUser: action.payload,
      });
    case USER_LOGOUT:
      return Object.assign({}, initialState, {
        currentUser: null,
      });
    default:
      return state;
  }
}

