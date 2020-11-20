import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route exact path="/movies/new" render={() => <NewMovie />} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
