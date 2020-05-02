import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { OidcCallbackComponent } from './oidc-callback/oidc-callback.component';
import { JsonDateInterceptor } from './interceptors/json-date.interceptor';
import { ApiRequestInterceptor } from './interceptors/api-request.interceptor';
import { IdentityComponent } from './identity/identity.component';
import { AuthGuard } from './auth/auth.guard';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MoviesComponent,
    OidcCallbackComponent,
    IdentityComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'home', component: HomeComponent },
      { path: 'oidc-callback', component: OidcCallbackComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'movie-detail/:id', component: MovieDetailComponent, canActivate: [AuthGuard] },
      { path: 'identity', component: IdentityComponent, canActivate: [AuthGuard] },
      //{ path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonDateInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
