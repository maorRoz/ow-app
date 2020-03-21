import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PUBLISH_NEW_APP } from '../types';
import { CreateAppApi } from '../api';
import { fetchApps, clearNewAppForm } from '../actions';
import { App } from '../../../types';
import { getNewAppDetailsSelector } from '../../../selectors';

export function* publishNewAppSaga() {
  try {
    const newAppDetails: Pick<App, 'name' | 'author'> = yield select(
      getNewAppDetailsSelector
    );
    yield call(CreateAppApi, newAppDetails);
    yield put(clearNewAppForm());
    yield put(fetchApps());
  } catch (e) {
    // add error
  }
}

export function* watchPublishNewAppSaga() {
  yield takeLatest(PUBLISH_NEW_APP, publishNewAppSaga);
}
