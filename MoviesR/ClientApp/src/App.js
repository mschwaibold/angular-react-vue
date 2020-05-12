import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { MovieDetails } from './components/MovieDetails';
import { OidcCallback } from './components/OidcCallback';
import { Auth } from './Auth';

import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  constructor() {
    super();
    this.auth = new Auth();
    this.state = {      
      auth: this.auth,
      isLoggedIn: false
    }    
  }

  componentDidMount() {
    this.auth.isLoggedIn().then(value => this.setState({ isLoggedIn: value }));
  }

  render () {
    return (
      <Layout appState={this.state}>
        <Route exact path='/' component={Home} />
        <Route path='/movies' render={() => <Movies appState={this.state} />} />
        <Route path='/movie-details/:id' render={() => <MovieDetails appState={this.state} />} />
        <Route path='/oidc-callback' component={OidcCallback} />
      </Layout>
    );
  }
}
