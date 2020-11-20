import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <div>Movie Card Library CRUD</div>
    </div>

  );
}

export default App;
