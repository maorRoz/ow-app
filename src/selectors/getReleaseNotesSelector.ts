import { OWAppState } from '../store';
import { ReleaseNotes } from '../types';

export const getReleaseNotesSelector = (state: OWAppState): ReleaseNotes[] =>
  state.releaseNotes.items;
