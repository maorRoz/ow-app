import { createSelector } from 'reselect';
import { OWAppState } from '../store';
import { App } from '../types';

export const isNewAppDetailsValidSelector = createSelector(
  (state: OWAppState): Pick<App, 'name' | 'author'> =>
    state.app.newAppDetails ?? { name: '', author: '' },
  ({ name, author }: Pick<App, 'name' | 'author'>): boolean =>
    Boolean(name && author)
);
