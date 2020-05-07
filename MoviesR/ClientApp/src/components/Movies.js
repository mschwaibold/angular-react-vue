///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   05.05.2020             //
//                                   //
///////////////////////////////////////

import React, { Component } from 'react';

export class Movies extends Component {
  static displayName = Movies.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    this.populateMovies();
  }

  static renderMoviesTable(movies, props) {    
    return (      
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Review</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.id}>
              <td><img src={movie.imageUrl} alt={movie.title} /></td>
              <td>
                <h2>{movie.title}</h2>
                <div>
                  {movie.review}
                </div>
                <div>
                  Added: {movie.created}
                </div>
                <div>
                  Updated: {movie.updated}
                </div>
                {props.appState.isLoggedIn &&
                  <div>
                    <a class="btn btn-outline-dark">Edit</a>
                  </div>
                }
              </td>
              <td><span>{movie.rating}/10</span></td >
            </tr >
          )}
        </tbody >
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Movies.renderMoviesTable(this.state.movies, this.props);

    return (
      <div>
        <h1 id="tabelLabel" >Movies seen in 2020</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateMovies() {
    const response = await fetch('https://localhost:44300/movies');
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }
}
