import { OWAppState } from '../store';

export const isSubmitFailedSelector = (state: OWAppState): boolean =>
  Boolean(state.releaseNotes.isSubmitFailed);
