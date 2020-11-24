import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieDetails, MovieList, NotFound, NewMovie, EditMovie } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
