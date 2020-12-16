import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" ><MovieList /></Route>
        <Route exact path="/movies/:id"><MovieDetails /></Route>
        <Route exact path="/movies/new"><NewMovie /></Route >
        <Route exact  path="/movies/:id/edit"><EditMovie /></Route>
        <Route ><NotFound /></Route>
      <div>Movie Card Library CRUD</div>
      </switch>
    </BrowserRouter>
  );
}

export default App;
