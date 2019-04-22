import { all } from 'redux-saga/effects';

import homePageSaga from './containers/HomePage/saga';
import UserPageSaga from './containers/UserPage/saga';

/**
 * Root saga
 */
export default function* root() {
  yield all([
    homePageSaga(),
    UserPageSaga(),
  ]);
}
