import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {}

  async canActivate() {
    if (true) {
      await this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
