import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/login/landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { UserFeedComponent } from './components/mainPage/user-feed/user-feed.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: LandingPageComponent },
  { path: 'login', component: LandingPageComponent },
  { path: 'home', component: UserFeedComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
