import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound, MovieList, NewMovie, MovieDetails, EditMovie } from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route
          exact path="/movies/:id/edit"
          component={(props) => <EditMovie {...props} />}
        />
        <Route
          exact path="/movies/:id"
          component={(props) => <MovieDetails {...props} />}
        />
        <Route exact path="/" component={MovieList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
