import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDatails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" component={MovieList} />
        <Router path="/movies/:id" component={MovieDatails} />
        <Router path="/movies/new" component={NewMovie} />
        <Router path="/movies/:id/edit" component={EditMovie} />
        <Router component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
