import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';


export const setUser = createAction('[User] Set User', props<{ user: User }>());
export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());