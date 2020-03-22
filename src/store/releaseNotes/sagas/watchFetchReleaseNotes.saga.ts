import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ReleaseNotes } from '../../../types';
import { FETCH_RELEASE_NOTES, FetchReleaseNotesAction } from '../types';
import { GetReleaseNotesApi } from '../api';
import { saveReleaseNotes } from '../actions';

export function* fetchReleaseNotesSaga(action: FetchReleaseNotesAction) {
  try {
    const response: AxiosResponse<ReleaseNotes[]> = yield call(
      GetReleaseNotesApi,
      action.payload
    );
    const releaseNotesArray = response.data;
    yield put(saveReleaseNotes(releaseNotesArray));
  } catch (e) {
    // add error
  }
}

export function* watchFetchReleaseNotesSaga() {
  yield takeLatest(FETCH_RELEASE_NOTES, fetchReleaseNotesSaga);
}
