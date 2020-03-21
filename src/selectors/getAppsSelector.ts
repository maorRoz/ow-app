import { OWAppState } from '../store';
import { App } from '../types';

export const getAppsSelector = (state: OWAppState): App[] => state.app.items;
