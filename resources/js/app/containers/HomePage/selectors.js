import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';
import { makeSelectUserItem } from '../UserPage/selectors';

const select = state => state.home || initialState;

export {
  select,
  makeSelectUserItem,
};
