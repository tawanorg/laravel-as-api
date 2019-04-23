import { all } from 'redux-saga/effects';

import listing from './sagas/listing';

/**
 * Root saga
 */
export default function* root() {
  yield all([
    listing(),
  ]);
}
