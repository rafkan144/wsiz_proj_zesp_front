import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem('authToken')) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
