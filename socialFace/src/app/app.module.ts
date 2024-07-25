import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SignInFormComponent } from './components/login/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './components/login/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignInFormComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
