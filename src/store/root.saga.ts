import { all, fork } from 'redux-saga/effects';
import { watchFetchAppsSaga, watchPublishNewAppSaga } from './app';
import {
  watchFetchReleaseNotesSaga,
  watchPublishNewReleaseNotesSaga
} from './releaseNotes';

const sagas = [
  watchFetchAppsSaga,
  watchPublishNewAppSaga,
  watchFetchReleaseNotesSaga,
  watchPublishNewReleaseNotesSaga
];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
