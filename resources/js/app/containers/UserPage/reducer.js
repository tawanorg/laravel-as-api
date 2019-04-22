import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN,
  USER_LOGOUT,
} from './constants';

export const initialState = {
  isRegisterLoading: false,
  isRegistered: false,
  isRegisterFailed: null,
  currentUser: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return Object.assign({}, state, {
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

