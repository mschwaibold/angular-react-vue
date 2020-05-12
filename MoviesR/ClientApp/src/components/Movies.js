///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   05.05.2020             //
//                                   //
///////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isLoggedIn: hasAuth } = useAuth();

  async function populateMovies() {
    const response = await fetch('https://localhost:44300/movies');
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => { populateMovies(); return undefined; }, []);
  useEffect(() => { hasAuth().then(value => setIsLoggedIn(value)); })

  function renderMoviesTable(movies, props) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
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
                {isLoggedIn &&
                  <div>
                    <a className="btn btn-outline-dark" href={'movie-details/' + movie.id}>Edit</a>
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

  let contents = loading
    ? <p><em>Loading...</em></p>
    : renderMoviesTable(movies, props);

  return (
    <div>
      <h1 id="tabelLabel" >Movies seen in 2020</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  )
}
