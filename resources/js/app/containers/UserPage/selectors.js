import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';

const select = state => state.user || initialState;

const makeSelectUserItem = () =>
  createSelector(
    select,
    state => state.currentUser,
  );

const makeSelectIsRegistering = () =>
  createSelector(
    select,
    state => state.isRegisterLoading,
  );

const makeSelectIsRegistered = () =>
  createSelector(
    select,
    state => state.isRegistered,
  );

const makeSelectIsRegisterFailed = () =>
  createSelector(
    select,
    state => state.isRegisterFailed,
  );

export {
  select,
  makeSelectUserItem,
  makeSelectIsRegistering,
  makeSelectIsRegistered,
  makeSelectIsRegisterFailed,
};
