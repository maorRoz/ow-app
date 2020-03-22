import {
  ReleaseNotesActionTypes,
  FETCH_RELEASE_NOTES,
  SAVE_RELEASE_NOTES,
  TOGGLE_RELEASE_NOTES_ADD_MODE,
  UPDATE_NEW_REALEASE_NOTES_DETAILS,
  PUBLISH_NEW_RELEASE_NOTES,
  CLEAR_NEW_RELEASE_NOTES_FORM,
  TOGGLE_SUBMIT_FAILED,
  SUBMIT_RELEASE_NOTES_CHANGES
} from './types';
import { ReleaseNotes, App } from '../../types';

export const fetchReleaseNotes = (
  appId: App['id']
): ReleaseNotesActionTypes => ({
  type: FETCH_RELEASE_NOTES,
  payload: appId
});

export const saveReleaseNotes = (
  releaseNotesArray: ReleaseNotes[]
): ReleaseNotesActionTypes => ({
  type: SAVE_RELEASE_NOTES,
  payload: releaseNotesArray
});

export const toggleReleaseNotesAddMode = (): ReleaseNotesActionTypes => ({
  type: TOGGLE_RELEASE_NOTES_ADD_MODE
});

export const updateNewReleaseNotesDetails = (
  newReleaseNotesDetails: Pick<
    ReleaseNotes,
    'versionNumber' | 'notes' | 'published'
  >
): ReleaseNotesActionTypes => ({
  type: UPDATE_NEW_REALEASE_NOTES_DETAILS,
  payload: newReleaseNotesDetails
});

export const publishNewReleaseNotes = (): ReleaseNotesActionTypes => ({
  type: PUBLISH_NEW_RELEASE_NOTES
});

export const clearNewReleaseNotesForm = (): ReleaseNotesActionTypes => ({
  type: CLEAR_NEW_RELEASE_NOTES_FORM
});

export const toggleSubmitFailed = (): ReleaseNotesActionTypes => ({
  type: TOGGLE_SUBMIT_FAILED
});

export const submitReleaseNotesChanges = (
  releaseNotes: Pick<ReleaseNotes, 'versionNumber' | 'notes' | 'published'>
): ReleaseNotesActionTypes => ({
  type: SUBMIT_RELEASE_NOTES_CHANGES,
  payload: releaseNotes
});
