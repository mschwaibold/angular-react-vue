///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   16.04.2020             //
//                                   //
///////////////////////////////////////

import { Injectable } from '@angular/core';
import { UserManager } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class OidcService {

  private config = {
    authority: "https://localhost:44301",
    client_id: "angular",
    redirect_uri: "https://localhost:44302/oidc-callback",
    response_type: "code",
    scope: "openid profile movieApi",
    post_logout_redirect_uri: "https://localhost:44302"
  };

  private readonly userMgr: UserManager;

  constructor() {
    this.userMgr = new UserManager(this.config);
  }

  public get userManager(): UserManager {
    return this.userMgr;
  }
}
