import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index.reducers';

export const selectFormToShowState = (state: AppState) => state.formToShow;

export const selectFormToShow = createSelector(
    selectFormToShowState,
  (formToShow: string) => formToShow
);