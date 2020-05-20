import React from 'react';
import { Route } from 'react-router';
import axios from 'axios';
import { Auth } from './Auth';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { MovieDetails } from './components/MovieDetails';
import { OidcCallback } from './components/OidcCallback';
import { StateProvider, currentUserReducer } from './state/StateProvider';
import './custom.css'

export default function App() {

  const initialState = { isAuthenticated: false };
  const auth = new Auth();

  axios.interceptors.request.use(async function (config) {
    // set authorization header only for API requests
    if (config.url.startsWith('https://localhost:44300')) {
      const token = await auth.getAccessToken();
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  return (
    <StateProvider initialState={initialState} reducer={currentUserReducer}>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/movie-details/:id' component={MovieDetails} />
        <Route path='/oidc-callback' component={OidcCallback} />
      </Layout>
    </StateProvider>
  );
}
