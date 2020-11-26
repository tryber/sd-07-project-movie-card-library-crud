import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, NotFound, EditMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
