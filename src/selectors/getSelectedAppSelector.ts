import { OWAppState } from '../store';

export const getSelectedAppSelector = (state: OWAppState): string =>
  state.releaseNotes.app;
