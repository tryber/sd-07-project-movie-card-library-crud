import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound  } from './pages/index';

export default class Routes extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ MovieList } />
        <Route path='/movies/:id' component={ MovieDetails } />
        <Route path='/movies/new' component={ NewMovie } />
        <Route path='/movies/:id/edit' component={ EditMovie } />
        <Route path='*' component={ NotFound } />
      </Switch>
    </BrowserRouter>
    );
  }
}
