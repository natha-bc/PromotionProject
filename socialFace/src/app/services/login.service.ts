import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../store/reducers/index.reducers';
import { Store } from '@ngrx/store';
import { setUser } from '../store/actions/user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient,
    private store: Store<AppState>,
    private router: Router) { }


  getUserByEmailAndPassword(email: string, password: string):void {
     this.http.get<User[]>(USERS_URL + `?email=${email}&password=${password}`).subscribe(user => {
      console.log(user);
      
      if (user.length > 0) {
        this.store.dispatch(setUser({ user: user[0] }));
        this.router.navigate(['/home']);
      }
    });
  }


}
