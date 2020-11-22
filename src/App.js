import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import EditMovie from './pages/EditMovie.js';
// import * as movieAPI from './services/movieAPI.js';
import NotFound from './pages/NotFound.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
