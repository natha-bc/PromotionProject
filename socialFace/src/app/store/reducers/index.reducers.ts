import { ActionReducerMap } from '@ngrx/store';
import { themeReducer } from './theme.reducer';
import { formToShowReducer } from './landingPage.reducer';

export interface AppState {
  theme: string;
  formToShow: string;
}

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer,
  formToShow: formToShowReducer
};