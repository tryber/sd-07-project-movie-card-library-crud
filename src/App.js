import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NewMovie, EditMovie, MovieDetails, MovieList, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router pach="/movies/new" component={NewMovie} />
        <Router pach="/movies/:id/edit" component={EditMovie} />
        <Router pach="/movies/:id" component={MovieDetails} />
        <Router exact pach="/" component={MovieList} />
        <Router component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
