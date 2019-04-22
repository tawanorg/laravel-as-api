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

export const initialState = {
  listing: state,
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
