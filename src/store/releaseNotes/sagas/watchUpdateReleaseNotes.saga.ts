import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  SUBMIT_RELEASE_NOTES_CHANGES,
  SubmitReleaseNotesChanges
} from '../types';
import { UpdateReleaseNotesApi } from '../api';
import { fetchReleaseNotes } from '../actions';
import { getSelectedAppIdSelector } from '../../../selectors';

export function* updateReleaseNotesSaga(action: SubmitReleaseNotesChanges) {
  try {
    const appId: string = yield select(getSelectedAppIdSelector);
    yield call(UpdateReleaseNotesApi, {
      appId,
      ...action.payload
    });
    yield put(fetchReleaseNotes(appId));
  } catch (e) {
    // add error
  }
}

export function* watchUpdateReleaseNotesSaga() {
  yield takeLatest(SUBMIT_RELEASE_NOTES_CHANGES, updateReleaseNotesSaga);
}
