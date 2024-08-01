// src/app/store/selectors/post.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from '../reducers/post.reducers';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);
