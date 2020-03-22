import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ReleaseNotes, App } from '../../../types';
import { FETCH_RELEASE_NOTES, FetchReleaseNotesAction } from '../types';
import { GetReleaseNotesApi, GetAppApi } from '../api';
import { saveReleaseNotes, setSelectedAppName } from '../actions';
import { getSelectedAppIdSelector } from '../../../selectors';

export function* fetchReleaseNotesSaga(action: FetchReleaseNotesAction) {
  try {
    const getReleaseNotesResponse: AxiosResponse<ReleaseNotes[]> = yield call(
      GetReleaseNotesApi,
      action.payload
    );
    const releaseNotesArray = getReleaseNotesResponse.data;
    yield put(saveReleaseNotes(releaseNotesArray));

    const appId: string = yield select(getSelectedAppIdSelector);

    const getAppResponse: AxiosResponse<App> = yield call(GetAppApi, appId);

    const { name } = getAppResponse.data;

    yield put(setSelectedAppName(name));
  } catch (e) {
    // add error
  }
}

export function* watchFetchReleaseNotesSaga() {
  yield takeLatest(FETCH_RELEASE_NOTES, fetchReleaseNotesSaga);
}
