import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { Store, select } from '@ngrx/store';
import { PostsService } from '../../../services/posts.service';
import { AppState } from '../../../store/reducers/index.reducers';
import { updatePost } from '../../../store/actions/post.actions';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent implements OnInit {
  @Input() post: Post | undefined;
  
  constructor(public postService: PostsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
      
  }

  likePost() {
    console.log("likePost");
    if(this.post){
      this.postService.likePost(this.post).subscribe({
        next: (post) => {
          this.store.dispatch(updatePost({ post: post }));
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  addComment(comment: string): void {
    if(this.post && comment && comment.length > 0){
      const UPDATED_COMMENTS = [...this.post?.comments, comment];
      const UPDATED_POST = { ...this.post, comments: UPDATED_COMMENTS };
      this.postService.addComment(UPDATED_POST).subscribe({
        next: (post) => {
          this.store.dispatch(updatePost({ post: post }));
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

}
