import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { App } from '../../../types';
import { FETCH_APPS } from '../types';
import { GetAppsApi } from '../api';
import { saveApps } from '../actions';

export function* fetchAppsSaga() {
  try {
    const response: AxiosResponse<App[]> = yield call(GetAppsApi);
    const apps = response.data;
    yield put(saveApps(apps));
  } catch (e) {
    // add error
  }
}

export function* watchFetchAppsSaga() {
  yield takeLatest(FETCH_APPS, fetchAppsSaga);
}
