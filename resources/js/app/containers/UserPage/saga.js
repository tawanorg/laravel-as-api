import { all, call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from './constants';


function* userRegister() {

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
