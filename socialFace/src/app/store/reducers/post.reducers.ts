import { Action, createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, loadPostsFailure, updatePost } from '../actions/post.actions';
import { Post } from '../../models/post';

export interface PostState {
  posts: Post[];
  error: any;
}

export const initialState: PostState = {
  posts: [],
  error: null,
};

export const _postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts, error: null })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error })),
  on(updatePost, (state, { post }) => ({
    ...state,
    posts: state.posts.map(p => (p.id === post.id ? post : p))
  }))
);

export function postReducer(state: PostState | undefined, action: Action) {
  return _postReducer(state, action);
}