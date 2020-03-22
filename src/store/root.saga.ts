import { all, fork } from 'redux-saga/effects';
import { watchFetchAppsSaga, watchPublishNewAppSaga } from './app';
import {
  watchFetchReleaseNotesSaga,
  watchPublishNewReleaseNotesSaga,
  watchUpdateReleaseNotesSaga
} from './releaseNotes';

const sagas = [
  watchFetchAppsSaga,
  watchPublishNewAppSaga,
  watchFetchReleaseNotesSaga,
  watchPublishNewReleaseNotesSaga,
  watchUpdateReleaseNotesSaga
];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
