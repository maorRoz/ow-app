import { Action } from 'redux';
import { App } from '../../types';

export const FETCH_APPS = 'FETCH_APPS';
export const SAVE_APPS = 'SAVE_APPS';
export const TOGGLE_ADD_MODE = 'TOGGLE_ADD_MODE';
export const UPDATE_NEW_APP_DETAILS = 'UPDATE_NEW_APP_DETAILS';
export const PUBLISH_NEW_APP = 'PUBLISH_NEW_APP';
export const CLEAR_NEW_APP_FORM = 'CLEAR_NEW_APP_FORM';

type FetchAppsAction = Action<typeof FETCH_APPS>;
interface SaveAppsAction extends Action<typeof SAVE_APPS> {
  payload: App[];
}
type ToggleAddModeAction = Action<typeof TOGGLE_ADD_MODE>;
interface UpdateNewAppDetails extends Action<typeof UPDATE_NEW_APP_DETAILS> {
  payload: Pick<App, 'name' | 'author'>;
}
type PublishNewApp = Action<typeof PUBLISH_NEW_APP>;
type ClearNewAppForm = Action<typeof CLEAR_NEW_APP_FORM>;

export type AppActionTypes =
  | FetchAppsAction
  | SaveAppsAction
  | ToggleAddModeAction
  | UpdateNewAppDetails
  | PublishNewApp
  | ClearNewAppForm;
