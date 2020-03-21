import { OWAppState } from '../store';

export const isAddModeSelector = (state: OWAppState): boolean =>
  Boolean(state.app.isAddMode);
