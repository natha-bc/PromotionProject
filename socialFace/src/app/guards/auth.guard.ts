import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = route.queryParams['userId'];

  if (userId !== undefined) {
    router.navigate(['/home']);
    return false;
  } else {
    router.navigate(['/login']);
    return false;
  }
};