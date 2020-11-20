import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
