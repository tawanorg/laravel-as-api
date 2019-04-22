import {
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.update, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case POST_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload,
      });

    case POST_UPDATE_FAILED:
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

