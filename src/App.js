import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieDetails, MovieList, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" render={(props) => (<EditMovie {...props} />)} />
        <Route path="/movies/:id" render={(props) => (<MovieDetails {...props} />)} />
        <Route exact path="/" component={MovieList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
