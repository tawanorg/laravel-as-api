import {
  createSelector
} from 'reselect';
import {
  initialState
} from './reducer';

const select = state => state.user || initialState;

// User
const makeSelectUserItem = () =>
  createSelector(
    select,
    state => state.currentUser,
  );

// Register
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

// Login
const makeSelectIsLogingIn = () =>
  createSelector(
    select,
    state => state.isLogInLoading,
  );

const makeSelectIsLoggedIn = () =>
  createSelector(
    select,
    state => state.isLoggedIn,
  );

const makeSelectIsLogInFailed = () =>
  createSelector(
    select,
    state => state.isLogInFailed,
  );

export {
  select,
  makeSelectUserItem,
  makeSelectIsRegistering,
  makeSelectIsRegistered,
  makeSelectIsRegisterFailed,
  makeSelectIsLogingIn,
  makeSelectIsLoggedIn,
  makeSelectIsLogInFailed,
};
