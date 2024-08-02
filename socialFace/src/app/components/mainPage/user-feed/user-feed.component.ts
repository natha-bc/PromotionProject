import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishComponent } from '../publish/publish.component';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../models/post';
import { Observable } from 'rxjs';
import { loadPostsSuccess, loadPostsFailure } from '../../../store/actions/post.actions';
import { AppState } from '../../../store/reducers/index.reducers';
import { select, Store } from '@ngrx/store';
import { selectPosts } from '../../../store/selectors/post.selectors';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrl: './user-feed.component.css',
  
})
export class UserFeedComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(public publishDialog:MatDialog,
    public postService: PostsService,
    private store: Store<AppState>

  ) {
    this.posts$ = this.store.pipe(select(selectPosts));
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.store.dispatch(loadPostsSuccess({ posts }));
      },
      error: (error) => {
        this.store.dispatch(loadPostsFailure({ error }));
      },
    });

  }
  openPublish() {
    this.publishDialog.open(PublishComponent, {
      width: '600px',  
      height: 'auto',  
      panelClass: 'custom-dialog-container',      
    });
  }
  
}
