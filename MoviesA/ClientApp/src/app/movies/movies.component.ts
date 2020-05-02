///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   15.04.2020             //
//                                   //
///////////////////////////////////////

import { Component, Inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {
  public movies: Movie[];

  constructor(private movieService: MovieService, public auth: AuthService, @Inject('BASE_URL') baseUrl: string) {
    movieService.getMovies().subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}


