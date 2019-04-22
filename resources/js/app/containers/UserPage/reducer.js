import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from './constants';

export const initialState = {
  isRegisterLoading: false,
  isRegistered: false,
  user: null,
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
        user: action.payload,
      });
    case USER_REGISTER_FAILED:
      return Object.assign({}, state, {
        isRegisterLoading: false,
        isRegistered: false,
        isRegisterError: action.payload,
        user: null,
      });
    default:
      return state;
  }
}

