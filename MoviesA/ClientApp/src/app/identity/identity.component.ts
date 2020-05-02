///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   24.04.2020             //
//                                   //
///////////////////////////////////////

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html'
})
export class IdentityComponent {
  public identity: any[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any[]>('https://localhost:44300/' + 'identity').subscribe(result => {
      this.identity = result;
    }, error => console.error(error));
  }
}
