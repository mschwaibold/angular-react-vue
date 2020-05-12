///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   07.05.2020             //
//                                   //
///////////////////////////////////////

import React, { useEffect } from 'react';
import { UserManager } from 'oidc-client';

export function OidcCallback() {

  useEffect(() => completeLogin(), []);

  function completeLogin() {
    new UserManager({ response_mode: "query" }).signinRedirectCallback().then(function () {
      window.location.href = "/";
    }).catch(function (e) {
      console.error(e);
    });
  }

  return (
    <h1>Completing login. This may take some seconds...</h1>
  )
}