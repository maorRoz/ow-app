import { OWAppState } from '../store';

export const getSelectedAppNameSelector = (state: OWAppState): string =>
  state.releaseNotes.appName;
