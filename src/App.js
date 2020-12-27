import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  MovieList, MovieDetails, NewMovie, EditMovie, NotFound,
} from './pages';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route><NotFound /></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
