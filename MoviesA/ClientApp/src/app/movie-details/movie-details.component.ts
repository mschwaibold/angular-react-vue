///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   30.04.2020             //
//                                   //
///////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'  
})
export class MovieDetailsComponent implements OnInit {

  public movie: Movie;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  public saveMovie() {
    if (this.movie.id > 0) {
      this.movieService.updateMovie(this.movie).subscribe();
    }
    else {
      this.movieService.addMovie(this.movie).subscribe();
    }
  }
}
