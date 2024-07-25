import { createReducer, on } from '@ngrx/store';
import { setTheme } from '../actions/theme.actions';
import { INITIAL_THEME } from '../../constants/constants';

export const initialState: string = localStorage.getItem('theme') || INITIAL_THEME;

const _themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => theme)
);

export function themeReducer(state: string | undefined, action: any) {  
  return _themeReducer(state, action);
}