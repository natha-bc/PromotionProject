import { ActionReducerMap } from '@ngrx/store';
import { themeReducer } from './theme.reducer';
import { formToShowReducer } from './landingPage.reducer';
import { postReducer, PostState } from './post.reducers';

export interface AppState {
  theme: string;
  formToShow: string;
  posts: PostState
}

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer,
  formToShow: formToShowReducer,
  posts:postReducer
};