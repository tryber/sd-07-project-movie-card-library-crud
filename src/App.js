import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      Movie Card Library CRUD
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route path="movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
