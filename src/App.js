import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import { getMovies } from './services/movieAPI';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';


function App() {
  return (
    <BrowserRouter>
      <Route path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="/" component={MovieList} />
      {/* <Route exact path="" component={() => <h1>NotFound</h1>} /> */}
    </BrowserRouter>
  );
}

export default App;
