import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { UserFeedComponent } from '../../components/mainPage/user-feed/user-feed.component';
import { PublishComponent } from '../../components/mainPage/publish/publish.component';
import { UserPostComponent } from '../../components/utils/user-post/user-post.component';
import { SharedModule } from '../shared.module';
import { CommentSectionComponent } from '../../components/utils/comment-section/comment-section.component';


@NgModule({
  declarations: [
    UserFeedComponent,
    PublishComponent,
    UserPostComponent,
    CommentSectionComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ],
  exports: [
    UserFeedComponent,
    PublishComponent,
    UserPostComponent,
    CommentSectionComponent
  ]
})
export class MainPageModule { }
