///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   12.05.2020             //
//                                   //
///////////////////////////////////////

export function useAuth() {

  var config = {
    authority: "https://localhost:44301",
    client_id: "react",
    redirect_uri: "https://localhost:44303/oidc-callback",
    response_type: "code",
    scope: "openid profile movieApi",
    post_logout_redirect_uri: "https://localhost:44303"
  };

  var userManager = new UserManager(config);
  var _user;

  userManager.getUser().then(user => _user = user);

  function login() {
    userManager.signinRedirect();
  }

  function logout() {
    userManager.signoutRedirect();
  }

  function getAccessToken() {
    return userManager.getUser().then(user => {
      return user ? user.access_token : null;
    });
  }

  function isLoggedIn() {
    return userManager.getUser().then(user => {
      return !!user && !user.expired;
    });
  }

  return { login, logout, getAccessToken, isLoggedIn }
}