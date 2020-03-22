import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PUBLISH_NEW_RELEASE_NOTES } from '../types';
import { CreateReleaseNotesApi } from '../api';
import {
  fetchReleaseNotes,
  clearNewReleaseNotesForm,
  toggleSubmitFailed
} from '../actions';
import { ReleaseNotes } from '../../../types';
import {
  getNewReleaseNotesDetailsSelector,
  getSelectedAppSelector
} from '../../../selectors';

export function* publishNewReleaseNotesSaga() {
  try {
    const newReleaseNotesDetails: Pick<
      ReleaseNotes,
      'versionNumber' | 'notes' | 'published'
    > = yield select(getNewReleaseNotesDetailsSelector);
    const appId: string = yield select(getSelectedAppSelector);
    yield call(CreateReleaseNotesApi, appId, {
      ...newReleaseNotesDetails,
      releaseDate: '27-5-2020'
    });
    yield put(clearNewReleaseNotesForm());
    yield put(fetchReleaseNotes(appId));
  } catch (e) {
    yield put(toggleSubmitFailed());
  }
}

export function* watchPublishNewReleaseNotesSaga() {
  yield takeLatest(PUBLISH_NEW_RELEASE_NOTES, publishNewReleaseNotesSaga);
}
