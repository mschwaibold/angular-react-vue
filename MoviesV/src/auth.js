///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   28.05.2020             //
//                                   //
///////////////////////////////////////

import { UserManager } from 'oidc-client';

const config = {
  authority: "https://localhost:44301",
  client_id: "vue",
  redirect_uri: "https://localhost:44304/oidc-callback",
  response_type: "code",
  scope: "openid profile movieApi",
  post_logout_redirect_uri: "https://localhost:44304"
};

const userManager = new UserManager(config);

export function login() {
  userManager.signinRedirect();
}

export function logout() {
  userManager.signoutRedirect();
}

export function getUser() {
  return userManager.getUser().then(user => {
    return !!user && !user.expired ? user : null;
  });
}

export function getAccessToken() {
  return userManager.getUser().then(user => {
    return user ? user.access_token : null;
  });
}

export function isLoggedIn() {
  return userManager.getUser().then(user => {
    return !!user && !user.expired;
  });
}
