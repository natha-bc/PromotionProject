import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index.reducers';

export const selectThemeState = (state: AppState) => state.theme;

export const selectTheme = createSelector(
  selectThemeState,
  (theme: string) => theme
);