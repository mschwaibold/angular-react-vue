///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   22.04.2020             //
//                                   //
///////////////////////////////////////

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { map, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // First of all, make sure that we only intercept api calls.
    if (request.url.startsWith('https://localhost:44300')) {

      // Get the auth token
      return from(this.authService.getAccessToken()).pipe(map(token => {
        if (token) {
          // Clone the HTTP request for appending new header
          const clonedRequest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          });

          // Return the modified request handler
          return next.handle(clonedRequest);
        }
        else {
          // else return the original request
          return next.handle(request);
        }
      })).pipe(flatMap(value => value))
    }
    else {
      // else return the original request
      return next.handle(request);
    }
  }
}
