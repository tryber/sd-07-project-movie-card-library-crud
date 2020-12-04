import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieList, NotFound, NewMovie, EditMovie } from './pages';


import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
