import { OWAppState } from '../store';
import { ReleaseNotes } from '../types';

export const getNewReleaseNotesDetailsSelector = (
  state: OWAppState
): Pick<ReleaseNotes, 'versionNumber' | 'notes' | 'published'> =>
  state.releaseNotes.newReleaseNotesDetails ?? {
    versionNumber: '',
    notes: '',
    published: false
  };
