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

const makeSelectPagination = () =>
  createSelector(
    select,
    state => state.listing.pagination,
  );

const makeSelectListingItems = () =>
  createSelector(
    select,
    state => state.listing.data || [],
  );

const makeSelectIsListingLoading = () =>
  createSelector(
    select,
    state => state.listing.isLoading && !state.listing.isFetched,
  );

const makeSelectIsListingFetching = () =>
  createSelector(
    select,
    state => state.listing.isLoading,
  );

export {
  select,
  makeSelectAllState,
  makeSelectUserItem,
  makeSelectPagination,
  makeSelectListingItems,
  makeSelectIsListingLoading,
  makeSelectIsListingFetching,
};
