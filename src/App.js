import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
