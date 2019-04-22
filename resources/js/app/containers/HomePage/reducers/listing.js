import {
  POST_LISTING_REQUEST,
  POST_LISTING_SUCCESS,
  POST_LISTING_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.delete, action) => {
  switch (action.type) {
    case POST_LISTING_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case POST_LISTING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload,
      });

    case POST_LISTING_FAILED:
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

