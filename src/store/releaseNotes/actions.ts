import {
  ReleaseNotesActionTypes,
  FETCH_RELEASE_NOTES,
  SAVE_RELEASE_NOTES
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
