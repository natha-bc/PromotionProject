import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction('[Post] Load Posts Success', props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[Post] Load Posts Failure', props<{ error: any }>());


export const updatePost = createAction(
    '[Post] Update Post',
    props<{ post: Post }>()
  );

