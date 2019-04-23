import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';
import { selectRouter } from '../App/selectors';
import { makeSelectUserItem } from '../UserPage/selectors';

const select = state => state.detail || initialState;

const makeSelectIsLoading = () =>
  createSelector(
    select,
    state => state.isLoading && !state.isFetched,
  );

const makeSelectIsFetching = () =>
  createSelector(
    select,
    state => state.isLoading,
  );

const makeSelectIsFailed = () =>
  createSelector(
    select,
    state => state.isFailed,
  );

const makeSelectDetailItems = () =>
  createSelector(
    select,
    state => state.data,
  );

export {
  select,
  selectRouter,
  makeSelectUserItem,
  makeSelectIsLoading,
  makeSelectIsFetching,
  makeSelectIsFailed,
  makeSelectDetailItems,
};
