/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import listing from './reducers/listing';
import create from './reducers/create';
import update from './reducers/update';
import _delete from './reducers/delete';

const state = {
  isLoading: false,
  isFetched: false,
  isFailed: null,
  data: null,
}

const pagination = {
  links: {
    first: null,
    last: null,
    next: null,
    prev: null,
  },
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    path: null,
    per_page: 0,
    to: 0,
    total: 0,
  }
}

export const initialState = {
  listing: Object.assign({}, state, { pagination }),
  create: state,
  update: state,
  delete: state,
}

export default combineReducers({
  listing,
  create,
  update,
  delete: _delete,
});
