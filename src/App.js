import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => <MovieDetails {...props} id="id" />} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} id="id" />} />
      <Route path="/" component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
