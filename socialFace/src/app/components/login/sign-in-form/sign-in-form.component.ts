import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { count, first } from 'rxjs';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent {
  signInForm: FormGroup;

  constructor() {
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
  }

  onSubmit() {
    console.log(this.signInForm.value);
    console.log('Submitted');
  }

}
