import { Action } from 'redux';
import { ReleaseNotes, App } from '../../types';

export const FETCH_RELEASE_NOTES = 'FETCH_RELEASE_NOTES';
export const SAVE_RELEASE_NOTES = 'SAVE_RELEASE_NOTES';
export const TOGGLE_RELEASE_NOTES_ADD_MODE = 'TOGGLE_RELEASE_NOTES_ADD_MODE';
export const UPDATE_NEW_REALEASE_NOTES_DETAILS =
  'UPDATE_NEW_REALEASE_NOTES_DETAILS';
export const PUBLISH_NEW_RELEASE_NOTES = 'PUBLISH_NEW_RELEASE_NOTES';
export const CLEAR_NEW_RELEASE_NOTES_FORM = 'CLEAR_NEW_RELEASE_NOTES_FORM';
export const TOGGLE_SUBMIT_FAILED = 'TOGGLE_SUBMIT_FAILED';
export const SUBMIT_RELEASE_NOTES_CHANGES = 'SUBMIT_RELEASE_NOTES_CHANGES';

export interface FetchReleaseNotesAction
  extends Action<typeof FETCH_RELEASE_NOTES> {
  payload: App['id'];
}
interface SaveReleaseNotesAction extends Action<typeof SAVE_RELEASE_NOTES> {
  payload: ReleaseNotes[];
}

type ToggleReleaseNotesAddModeAction = Action<
  typeof TOGGLE_RELEASE_NOTES_ADD_MODE
>;
interface UpdateNewReleaseNotesDetails
  extends Action<typeof UPDATE_NEW_REALEASE_NOTES_DETAILS> {
  payload: Pick<ReleaseNotes, 'versionNumber' | 'notes'>;
}
type PublishNewReleaseNotes = Action<typeof PUBLISH_NEW_RELEASE_NOTES>;
type ClearNewReleaseNotesForm = Action<typeof CLEAR_NEW_RELEASE_NOTES_FORM>;
type ToggleSubmitFailed = Action<typeof TOGGLE_SUBMIT_FAILED>;
export interface SubmitReleaseNotesChanges
  extends Action<typeof SUBMIT_RELEASE_NOTES_CHANGES> {
  payload: Pick<ReleaseNotes, 'versionNumber' | 'notes' | 'published'>;
}

export type ReleaseNotesActionTypes =
  | FetchReleaseNotesAction
  | SaveReleaseNotesAction
  | ToggleReleaseNotesAddModeAction
  | UpdateNewReleaseNotesDetails
  | PublishNewReleaseNotes
  | ClearNewReleaseNotesForm
  | ToggleSubmitFailed
  | SubmitReleaseNotesChanges;
