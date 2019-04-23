import {
  FILM_CREATE_REQUEST,
  FILM_CREATE_SUCCESS,
  FILM_CREATE_FAILED,
} from '../constants';
import { initialState } from '../reducer';

export default (state = initialState.create, action) => {
  switch (action.type) {
    case FILM_CREATE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case FILM_CREATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFetched: true,
        data: action.payload,
      });

    case FILM_CREATE_FAILED:
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

