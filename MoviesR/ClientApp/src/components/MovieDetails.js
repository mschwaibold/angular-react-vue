///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   09.05.2020             //
//                                   //
///////////////////////////////////////

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export function MovieDetails(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    function getMovie() {
      if (!movie) {
        axios.get('https://localhost:44300/movies/' + id)
          .then(response => {
            setMovie(response.data);
          }, error => {
            console.log(error);
          });
      }
    };
    getMovie();
  }, [movie, id]);

  function saveMovie() {
    if (movie.id > 0) {
      //this.movieService.updateMovie(this.movie).subscribe();
    }
    else {
      //this.movieService.addMovie(this.movie).subscribe();
    }
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  const loading = <p><em>Loading...</em></p>

  return (
    !movie ? loading :

      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" name="title" value={movie.title} onChange={handleInputChange} /><br />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" className="form-control" id="image" name="image" value={movie.imageUrl} onChange={handleInputChange} /><br />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea className="form-control" id="review" name="review" value={movie.review} onChange={handleInputChange}></textarea><br />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="text" className="form-control" id="rating" name="rating" value={movie.rating} onChange={handleInputChange} /><br />
        </div>
        <button type="button" className="btn btn-primary" onClick={saveMovie}>Save</button>
      </form>
  );
}
