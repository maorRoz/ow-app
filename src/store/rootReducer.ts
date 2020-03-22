import { combineReducers } from 'redux';
import { appReducer } from './app';
import { releaseNotesReducer } from './releaseNotes';

export const rootReducer = combineReducers({
  app: appReducer,
  releaseNotes: releaseNotesReducer
});
