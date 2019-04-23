import axios from 'axios';
import { all, call, put, takeLatest, takeEvery, fork } from 'redux-saga/effects';
import {
  FILM_LISTING_REQUEST,
} from '../constants';
import {
  FILM_API_READ_ENDPOINT,
} from '../../../api';

import * as action from '../actions/listing';

function listingApi(pageNumber) {
  return new Promise((resolve, reject) => {
    axios.get(`${FILM_API_READ_ENDPOINT}/?page=${pageNumber}`)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => reject(new Error(error)));
  })
}

function* getListing({ payload }) {
  try {
    const page = payload;
    const { data, meta, links } = yield call(listingApi, page)
    yield put(action.success({ data, pagination: { meta, links }}));
  } catch (error) {
    yield put(action.failed(error.message));
  }
}


/**
 * Watchers
 */

function* watchListingRequest() {
  yield takeLatest(FILM_LISTING_REQUEST, getListing)
}

export default function* root() {
  yield all([
    watchListingRequest(),
  ])
}
