import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route exact Path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
