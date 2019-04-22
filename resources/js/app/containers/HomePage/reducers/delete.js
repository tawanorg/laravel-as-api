import {
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.delete, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case POST_DELETE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload,
      });

    case POST_DELETE_FAILED:
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

