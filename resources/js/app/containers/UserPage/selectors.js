import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';

const select = state => state.user || initialState;

const makeSelectItem = () =>
  createSelector(
    select,
    state => state,
  );

export {
  select,
  makeSelectItem,
};
