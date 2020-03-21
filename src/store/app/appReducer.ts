import { Reducer } from 'redux';
import {
  AppActionTypes,
  SAVE_APPS,
  TOGGLE_ADD_MODE,
  UPDATE_NEW_APP_DETAILS,
  CLEAR_NEW_APP_FORM
} from './types';
import { App } from '../../types';

type AppState = {
  items: App[];
  isAddMode?: boolean;
  newAppDetails?: Pick<App, 'name' | 'author'>;
};

const initialState: AppState = { items: [] };

export const appReducer: Reducer<AppState, AppActionTypes> = (
  state = initialState,
  action
): AppState => {
  switch (action.type) {
    case SAVE_APPS: {
      return { ...state, items: action.payload };
    }
    case TOGGLE_ADD_MODE:
      return { ...state, isAddMode: true };
    case UPDATE_NEW_APP_DETAILS:
      return { ...state, newAppDetails: action.payload };
    case CLEAR_NEW_APP_FORM:
      return { ...state, newAppDetails: { name: '', author: '' } };
    default:
      return state;
  }
};
