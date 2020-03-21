import { OWAppState } from '../store';
import { App } from '../types';

export const getNewAppDetailsSelector = (
  state: OWAppState
): Pick<App, 'name' | 'author'> =>
  state.app.newAppDetails ?? { name: '', author: '' };
