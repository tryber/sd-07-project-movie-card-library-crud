import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Route component={MovieList} path="/" />
      <Route component={MovieDetails} path="/movies/:id" />
      <Route component={NewMovie} path="/movies/new" />
      <Route component={EditMovie} path="/movies/:id/edit" />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
