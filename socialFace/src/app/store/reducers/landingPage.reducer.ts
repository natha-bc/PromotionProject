import { createReducer, on } from '@ngrx/store';
import { FORM_TO_SHOW } from '../../constants/constants';
import { setFormToShow } from '../actions/landingPage.actions';

export const initialState: string = localStorage.getItem('formToShow') || FORM_TO_SHOW;

const _formToShowReducer = createReducer(
  initialState,
  on(setFormToShow, (state, { formToShow }) => formToShow)
);

export function formToShowReducer(state: string | undefined, action: any) {  
  return _formToShowReducer(state, action);
}