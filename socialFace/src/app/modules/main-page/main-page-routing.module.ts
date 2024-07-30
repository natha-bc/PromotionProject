import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeedComponent } from '../../components/mainPage/user-feed/user-feed.component';

const routes: Routes = [
  { path: '', component: UserFeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }