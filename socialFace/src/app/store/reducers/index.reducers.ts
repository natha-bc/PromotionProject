import { ActionReducerMap } from '@ngrx/store';
import { themeReducer } from './theme.reducer';
import { formToShowReducer } from './landingPage.reducer';
import { postFeature, PostState } from './post.reducers';
import { userFeature, UserState } from './user.reducers';

export interface AppState {
  theme: string;
  formToShow: string;
  posts: PostState,
  user: UserState
}

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer,
  formToShow: formToShowReducer,
  posts: postFeature.reducer,
  user: userFeature.reducer
};