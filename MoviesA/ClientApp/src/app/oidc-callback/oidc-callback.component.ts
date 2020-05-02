///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   15.04.2020             //
//                                   //
///////////////////////////////////////

import { Component } from '@angular/core';
import { UserManager } from 'oidc-client';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.component.html'
})

export class OidcCallbackComponent {
  public oidc = 'Completing login. This may take some seconds...';

  constructor() {
    new UserManager({ response_mode: "query" }).signinRedirectCallback().then(function () {
      window.location.href = "/";
    }).catch(function (e) {
      console.error(e);
    });
  }
}
