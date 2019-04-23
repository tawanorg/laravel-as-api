import axios from 'axios';
import { all, call, put, select, takeLatest, takeEvery, fork } from 'redux-saga/effects';
import {
  REQUEST
} from './constants';
import {
  FILM_API_READ_ENDPOINT,
} from '../../api';
import { selectRouter } from './selectors';
import { success, failed } from './actions';

function detailApi(slug) {
  return new Promise((resolve, reject) => {
    axios.get(`${FILM_API_READ_ENDPOINT}/${slug}`)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => reject(error));
  })
}

function* getDetail({ payload }) {
  try {
    let slug = payload;
    if (slug === null) {
      let router = yield select(selectRouter);
      slug = router.location.pathname.split('/')[2];
    }
    const { data } = yield call(detailApi, slug)
    yield put(success(data));
  } catch (error) {
    yield put(failed(error));
  }
}
/**
 * Watchers
 */
function* watchRequestDetail() {
  yield takeLatest(REQUEST, getDetail);
}

export default function* root() {
  yield all([
    watchRequestDetail(),
  ])
}
