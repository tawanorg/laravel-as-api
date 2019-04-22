import {
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.create, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case POST_CREATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload,
      });

    case POST_CREATE_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: false,
        isFailed: action.payload,
        data: null,
      });

    default:
      return state;
  }
}

