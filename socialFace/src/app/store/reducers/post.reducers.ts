import { createFeature, createReducer, on } from '@ngrx/store';
import { Post } from '../../models/post';
import { loadPostsSuccess, loadPostsFailure, updatePost } from '../actions/post.actions';


export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [],
};


export const postFeature = createFeature({
  name: 'posts',
  reducer: createReducer(
    initialState,
    on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts, error: null })),
    on(loadPostsFailure, (state, { error }) => ({ ...state, error })),
    on(updatePost, (state, { post }) => ({
      ...state,
      posts: state.posts.map(p => (p.id === post.id ? post : p))
    }))
  ),
});