import { all } from 'redux-saga/effects';

import homePageSaga from './containers/HomePage/saga';

/**
 * Root saga
 */
export default function* root() {
  yield all([
    homePageSaga(),
  ]);
}
