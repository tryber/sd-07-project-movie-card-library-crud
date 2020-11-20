import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link className="add-movie-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
