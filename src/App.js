import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} render={<MovieList />} />
        <Route path={'/movies/:id'} render={<MovieDetails />} />
        <Route path={'/movies/new'} render={<NewMovie />} />
        <Route path={'/movies/:id/edit'} render={<EditMovie />} />
        <Route path={''} render={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
