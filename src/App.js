import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
