import axios from 'axios';
import { all, call, put, takeLatest, takeEvery, fork } from 'redux-saga/effects';
import {
  USER_REGISTER_REQUEST,
  USER_AUTH,
  USER_DESTROY,
  USER_LOGIN_REQUEST,
} from './constants';
import {
  USER_API_REGISTER_ENDPOINT,
  USER_API_LOGIN_ENDPOINT,
} from '../../api';
import {
  userLoggedIn,
  userRegisterFailed,
  userRegisterSuccess,
  userLoggedOut,
  userLoginSuccess,
  userLoginFailed,
} from './actions';

function User({ email, name, password, password_confirmation }) {
  return {
    email,
    name,
    password,
    password_confirmation,
  }
}

function userRegisterApi(user) {
  return new Promise((resolve, reject) => {
    axios.post(USER_API_REGISTER_ENDPOINT, user)
    .then(response => {
      if (!response.data.hasOwnProperty('user')) {
        reject(new Error(JSON.stringify(response.data)));
      }

      resolve(response.data);
    })
    .catch(error => reject(error));
  })
}

function userLoginApi(user) {
  return new Promise((resolve, reject) => {
    axios.post(USER_API_LOGIN_ENDPOINT, user)
    .then(response => {
      if (!response.data.hasOwnProperty('user')) {
        reject(new Error(JSON.stringify(response.data)));
      }

      resolve(response.data);
    })
    .catch(error => {
      reject(error)
    });
  })
}

function* userRegister({ payload }) {
  try {
    const { name, email, password, password_confirmation } = payload;
    const userItem = new User({ name, email, password, password_confirmation })
    const userObj = yield call(userRegisterApi, userItem)
    yield put(userRegisterSuccess(userObj));
    localStorage.setItem('user', JSON.stringify(userObj));
  } catch (error) {
    localStorage.removeItem('user');
    yield put(userRegisterFailed(error))
  }
}

function* userLogin({ payload }) {
  try {
    const { email, password } = payload;
    const userItem = { email, password }
    const userObj = yield call(userLoginApi, userItem)
    yield put(userLoginSuccess(userObj));
    localStorage.setItem('user', JSON.stringify(userObj));
  } catch (error) {
    console.log('error', error);
    localStorage.removeItem('user');
    yield put(userLoginFailed(error))
  }
}

function* auth() {
  let user = localStorage.getItem('user');
  let userObj = JSON.parse(user);
  yield put(userLoggedIn(userObj));
}

function* destroy() {
  localStorage.removeItem('user');
  yield put(userLoggedOut());
}

/**
 * Watchers
 */
function* watchUserLoggingin() {
  yield takeEvery(USER_LOGIN_REQUEST, userLogin);
}

function* watchUserRegistering() {
  yield takeEvery(USER_REGISTER_REQUEST, userRegister);
}

function* watchUserAuth() {
  yield takeEvery(USER_AUTH, auth)
}

function* watchUserDestroy() {
  yield takeEvery(USER_DESTROY, destroy)
}

export default function* root() {
  yield all([
    watchUserRegistering(),
    watchUserLoggingin(),
    watchUserAuth(),
    watchUserDestroy(),
  ])
}
