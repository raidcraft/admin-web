import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'WZDNs2gM86FKivtIVgbrvdVqDW3j19Y0',
    domain: 'faldoria.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://api.faldoria.de',
    redirectUri: `https://${location.host}/`,
    scope: 'openid profile read:items write:items'
  });

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const token = new JwtHelperService().decodeToken(authResult.accessToken);
    const scopes = token.scope;

    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public userHasScopes(...scopes: string[]): boolean {
    const existingScopes = JSON.parse(localStorage.getItem('scopes'));

    if (!existingScopes) return false;

    const grantedScopes = existingScopes.split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }
}
