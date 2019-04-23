import {
  FILM_LISTING_REQUEST,
  FILM_LISTING_SUCCESS,
  FILM_LISTING_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.listing, action) => {
  switch (action.type) {
    case FILM_LISTING_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case FILM_LISTING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload.data,
        pagination: action.payload.pagination,
      });

    case FILM_LISTING_FAILED:
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

