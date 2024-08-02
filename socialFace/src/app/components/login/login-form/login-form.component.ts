import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LOGIN_FORM } from '../../../constants/constants';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/index.reducers';
import { selectFormToShow } from '../../../store/selectors/landingPage.selectors';
import { LoginService } from '../../../services/login.service';
import { loadUser, setUser } from '../../../store/actions/user.actions';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import { selectUser } from '../../../store/selectors/user.selectors';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  user$: Observable<User | null> | undefined;
    constructor(private store: Store<AppState>,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.store.select(selectFormToShow).subscribe(formToShow => {
      formToShow === LOGIN_FORM ? this.loginForm.enable() : this.loginForm.disable();
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadUser());
  }
  onSubmit() {
    console.log(this.loginForm.value);
    console.log('Submitted');
    this.loginService.getUserByEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)

    
  }

}
