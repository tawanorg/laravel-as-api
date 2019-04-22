import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;
 
const makeSelectCurrentDate = () =>
  createSelector(
    selectGlobal,
    state => state.currentDate,
  );

export { selectGlobal, selectRouter, makeSelectCurrentDate };
