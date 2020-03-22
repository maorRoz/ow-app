import { all, fork } from 'redux-saga/effects';
import { watchFetchAppsSaga, watchPublishNewAppSaga } from './app';
import { watchFetchReleaseNotesSaga } from './releaseNotes';

const sagas = [
  watchFetchAppsSaga,
  watchPublishNewAppSaga,
  watchFetchReleaseNotesSaga
];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
