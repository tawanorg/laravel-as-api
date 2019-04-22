import axios from 'axios';
import { all, call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  USER_REGISTER_REQUEST,
} from './constants';
import { USER_API_REGISTER_ENDPOINT } from '../../api';
import { userRegisterFailed, userRegisterSuccess } from './actions';

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

function* userRegister({ payload }) {
  try {
    const { name, email, password, password_confirmation } = payload;
    const userItem = new User({ name, email, password, password_confirmation })
    const user = yield call(userRegisterApi, userItem)
    yield put(userRegisterSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
    console.log('userRegister', user)
  } catch (error) {
    localStorage.removeItem('user');
    yield put(userRegisterFailed(error))
  }
}

/**
 * Watchers
 */
function* watchUserRegistering() {
  yield takeLatest(USER_REGISTER_REQUEST, userRegister);
}

export default function* root() {
  yield all([
    watchUserRegistering(),
  ])
}
