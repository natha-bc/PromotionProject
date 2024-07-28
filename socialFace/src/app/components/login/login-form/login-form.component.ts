import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LOGIN_FORM } from '../../../constants/constants';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index.reducers';
import { selectFormToShow } from '../../../store/selectors/landingPage.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.store.select(selectFormToShow).subscribe(formToShow => {
      formToShow === LOGIN_FORM ? this.loginForm.enable() : this.loginForm.disable();
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log('Submitted');
  }
}
