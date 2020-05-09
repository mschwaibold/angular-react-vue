///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   07.05.2020             //
//                                   //
///////////////////////////////////////

import React, { Component } from 'react';
import { UserManager } from 'oidc-client';

export class OidcCallback extends Component {
  static displayName = OidcCallback.name;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.completeLogin();
  }

  completeLogin() {
    new UserManager({ response_mode: "query" }).signinRedirectCallback().then(function () {
      window.location.href = "/";
    }).catch(function (e) {
      console.error(e);
    });
  }

  render() {    
    return (
      <h1>Completing login. This may take some seconds...</h1>
    )
  }
}