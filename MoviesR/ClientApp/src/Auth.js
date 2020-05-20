///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   07.05.2020             //
//                                   //
///////////////////////////////////////

import { UserManager } from 'oidc-client';

export class Auth {

  constructor() {
    var config = {
      authority: "https://localhost:44301",
      client_id: "react",
      redirect_uri: "https://localhost:44303/oidc-callback",
      response_type: "code",
      scope: "openid profile movieApi",
      post_logout_redirect_uri: "https://localhost:44303"
    };

    this.userManager = new UserManager(config);

    //this.login = this.login.bind(this);
    //this.logout = this.logout.bind(this);
    //this.getAccessToken = this.getAccessToken.bind(this);
    //this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  login() {
    this.userManager.signinRedirect();
  }

  logout() {
    this.userManager.signoutRedirect();
  }

  getUser() {
    return this.userManager.getUser().then(user => {
      return !!user && !user.expired ? user : null;
    });
  }

  getAccessToken() {
    return this.userManager.getUser().then(user => {
      return user ? user.access_token : null;
    });
  }

  isLoggedIn() {
    return this.userManager.getUser().then(user => {
      return !!user && !user.expired;
    });
  }
}