import { Reducer } from 'redux';
import {
  ReleaseNotesActionTypes,
  FETCH_RELEASE_NOTES,
  SAVE_RELEASE_NOTES
} from './types';
import { ReleaseNotes, App } from '../../types';

type ReleaseNotesState = {
  items: ReleaseNotes[];
  app: App['id'];
};

const initialState: ReleaseNotesState = { items: [], app: '' };

export const releaseNotesReducer: Reducer<
  ReleaseNotesState,
  ReleaseNotesActionTypes
> = (state = initialState, action): ReleaseNotesState => {
  switch (action.type) {
    case FETCH_RELEASE_NOTES:
      return { ...state, app: action.payload };
    case SAVE_RELEASE_NOTES:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
