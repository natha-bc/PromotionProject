import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../store/reducers/index.reducers';
import { selectUser } from '../store/selectors/user.selectors';

export const AuthGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.pipe(
    select(selectUser),
    map(user => {
      if (user) {
        router.navigate(['/home']);
        return false;
      } else {
        router.navigate(['/login']);
        return false; 
      }
    })
  );
};