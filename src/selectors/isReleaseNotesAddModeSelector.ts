import { OWAppState } from '../store';

export const isReleaseNotesAddModeSelector = (state: OWAppState): boolean =>
  Boolean(state.releaseNotes.isAddMode);
