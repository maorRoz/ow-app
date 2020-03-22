import { Action } from 'redux';
import { ReleaseNotes, App } from '../../types';

export const FETCH_RELEASE_NOTES = 'FETCH_RELEASE_NOTES';
export const SAVE_RELEASE_NOTES = 'SAVE_RELEASE_NOTES';

export interface FetchReleaseNotesAction
  extends Action<typeof FETCH_RELEASE_NOTES> {
  payload: App['id'];
}
interface SaveReleaseNotesAction extends Action<typeof SAVE_RELEASE_NOTES> {
  payload: ReleaseNotes[];
}

export type ReleaseNotesActionTypes =
  | FetchReleaseNotesAction
  | SaveReleaseNotesAction;
