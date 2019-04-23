import {
  REQUEST,
  SUCCESS,
  FAILED,
} from './constants';

export const initialState = {
  // Register
  isLoading: false,
  isFetched: false,
  isFailed: null,
  // user
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Login
    case REQUEST:
      return Object.assign({}, initialState, {
        isLoading: true,
      });
    case SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: state.data.concat(action.payload),
      });
    case FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: false,
        isFailed: action.payload,
        data: [],
      });
    default:
      return state;
  }
}

