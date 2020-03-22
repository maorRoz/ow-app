import { OWAppState } from '../store';

export const getSelectedAppIdSelector = (state: OWAppState): string =>
  state.releaseNotes.app;
