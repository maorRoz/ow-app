import { Reducer } from 'redux';
import {
  ReleaseNotesActionTypes,
  FETCH_RELEASE_NOTES,
  SET_SELECTED_APP_NAME,
  SAVE_RELEASE_NOTES,
  TOGGLE_RELEASE_NOTES_ADD_MODE,
  UPDATE_NEW_REALEASE_NOTES_DETAILS,
  CLEAR_NEW_RELEASE_NOTES_FORM,
  PUBLISH_NEW_RELEASE_NOTES,
  TOGGLE_SUBMIT_FAILED
} from './types';
import { ReleaseNotes, App } from '../../types';

type ReleaseNotesState = {
  items: ReleaseNotes[];
  appId: App['id'];
  appName: App['name'];
  isAddMode?: boolean;
  newReleaseNotesDetails?: Pick<
    ReleaseNotes,
    'versionNumber' | 'notes' | 'published'
  >;
  isSubmitFailed?: boolean;
};

const initialState: ReleaseNotesState = { items: [], appId: '', appName: '' };

export const releaseNotesReducer: Reducer<
  ReleaseNotesState,
  ReleaseNotesActionTypes
> = (state = initialState, action): ReleaseNotesState => {
  switch (action.type) {
    case FETCH_RELEASE_NOTES:
      return { ...state, appId: action.payload };
    case SET_SELECTED_APP_NAME:
      return { ...state, appName: action.payload };
    case SAVE_RELEASE_NOTES:
      return { ...state, items: action.payload };
    case TOGGLE_RELEASE_NOTES_ADD_MODE:
      return { ...state, isAddMode: true };
    case UPDATE_NEW_REALEASE_NOTES_DETAILS:
      return { ...state, newReleaseNotesDetails: action.payload };
    case PUBLISH_NEW_RELEASE_NOTES:
      return {
        ...state,
        isSubmitFailed: false
      };
    case CLEAR_NEW_RELEASE_NOTES_FORM:
      return {
        ...state,
        newReleaseNotesDetails: {
          versionNumber: '',
          notes: '',
          published: false
        }
      };
    case TOGGLE_SUBMIT_FAILED:
      return { ...state, isSubmitFailed: true };
    default:
      return state;
  }
};
