import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScopeGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const scopes = (route.data as any).scopes;

    if (!this.auth.isAuthenticated() || !this.auth.userHasScopes(...scopes)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
