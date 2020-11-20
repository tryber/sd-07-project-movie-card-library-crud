import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" render={() => <NewMovie />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
