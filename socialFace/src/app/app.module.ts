import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SignInFormComponent } from './components/login/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './components/login/landing-page/landing-page.component';
import { ThemeSwitchComponent } from './components/utils/theme-switch/theme-switch.component';
import { reducers } from './store/reducers/index.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCurtainComponent } from './components/login/form-curtain/form-curtain.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFeedComponent } from './components/mainPage/user-feed/user-feed.component';
import { UserPostComponent } from './components/utils/user-post/user-post.component';
import { PublishComponent } from './components/mainPage/publish/publish.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignInFormComponent,
    LandingPageComponent,
    ThemeSwitchComponent,
    FormCurtainComponent,
    UserFeedComponent,
    UserPostComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
