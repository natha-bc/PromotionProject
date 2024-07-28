import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index.reducers';
import { selectFormToShow } from '../../../store/selectors/landingPage.selectors';
import { SIGN_IN_FORM } from '../../../constants/constants';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent {
  signInForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.signInForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      birthDate: new FormControl(''),
      country: new FormControl(''),
      notificationPreference: new FormControl('')
    });
    this.store.select(selectFormToShow).subscribe(formToShow => {
      formToShow === SIGN_IN_FORM ? this.signInForm.enable() : this.signInForm.disable();
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
    console.log('Submitted');
  }

}
