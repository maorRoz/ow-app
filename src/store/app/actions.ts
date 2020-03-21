import {
  AppActionTypes,
  FETCH_APPS,
  SAVE_APPS,
  TOGGLE_ADD_MODE,
  UPDATE_NEW_APP_DETAILS,
  PUBLISH_NEW_APP,
  CLEAR_NEW_APP_FORM
} from './types';
import { App } from '../../types';

export const fetchApps = (): AppActionTypes => ({
  type: FETCH_APPS
});

export const saveApps = (apps: App[]): AppActionTypes => ({
  type: SAVE_APPS,
  payload: apps
});

export const toggleAddMode = (): AppActionTypes => ({
  type: TOGGLE_ADD_MODE
});

export const updateNewAppDetails = (
  newAppDetails: Pick<App, 'name' | 'author'>
): AppActionTypes => ({
  type: UPDATE_NEW_APP_DETAILS,
  payload: newAppDetails
});

export const publishNewApp = (): AppActionTypes => ({
  type: PUBLISH_NEW_APP
});

export const clearNewAppForm = (): AppActionTypes => ({
  type: CLEAR_NEW_APP_FORM
});
