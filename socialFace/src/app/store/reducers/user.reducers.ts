import { createFeature, createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure, setUser } from '../actions/user.actions';
import { User } from '../../models/user';

export interface UserState {
    user: User | null;
}

export const initialUserState: UserState = {
    user: null,
  };


  export const userFeature = createFeature({
    name: 'user',
    reducer: createReducer(
      initialUserState,
      on(loadUser, (state) => ({ ...state, loading: true, error: null })),
      on(loadUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
      on(loadUserFailure, (state, { error }) => ({ ...state, error, loading: false })),
      on(setUser, (state, { user }) => ({ ...state, user }))
    ),
  })