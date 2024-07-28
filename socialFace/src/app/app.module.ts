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
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignInFormComponent,
    LandingPageComponent,
    ThemeSwitchComponent,
    FormCurtainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
