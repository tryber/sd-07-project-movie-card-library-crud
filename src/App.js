import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
