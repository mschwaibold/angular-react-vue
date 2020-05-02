///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   15.04.2020             //
//                                   //
///////////////////////////////////////

import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { OidcService } from '../oidc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager: UserManager;

  private user: User;

  constructor(private oidcService: OidcService) {
    this.userManager = oidcService.userManager;
    this.userManager.getUser().then(user => this.user = user);
  }

  public login() {
    this.userManager.signinRedirect();
  }

  public logout() {
    this.userManager.signoutRedirect();
  }

  public getAccessToken(): Promise<string> {
    return this.userManager.getUser().then(user => {
      return user ? user.access_token : null;
    });
  }

  public get isLoggedIn(): boolean {
    return !!this.user && !this.user.expired;
  }
}
