import { all, fork } from 'redux-saga/effects';
import { watchFetchAppsSaga, watchPublishNewAppSaga } from './app';

const sagas = [watchFetchAppsSaga, watchPublishNewAppSaga];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
