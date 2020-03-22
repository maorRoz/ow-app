import { createSelector } from 'reselect';
import { OWAppState } from '../store';
import { ReleaseNotes } from '../types';

export const isNewReleaseNotesDetailsValidSelector = createSelector(
  (state: OWAppState): Pick<ReleaseNotes, 'versionNumber' | 'notes'> =>
    state.releaseNotes.newReleaseNotesDetails ?? {
      versionNumber: '',
      notes: ''
    },
  ({
    versionNumber,
    notes
  }: Pick<ReleaseNotes, 'versionNumber' | 'notes'>): boolean =>
    Boolean(versionNumber && notes)
);
