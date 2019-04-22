import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';
import { makeSelectUserItem } from '../UserPage/selectors';

const select = state => state.home || initialState;

const makeSelectAllState = () =>
  createSelector(
    select,
    state => state,
  );

export {
  select,
  makeSelectAllState,
  makeSelectUserItem,
};
