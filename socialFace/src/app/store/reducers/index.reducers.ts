import { ActionReducerMap } from '@ngrx/store';
import { themeReducer } from './theme.reducer';

export interface AppState {
  theme: string;
}

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer
};