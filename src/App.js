import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import NotFound from './pages/NotFound.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect to="/NotFound" />        
      </Switch>
    </BrowserRouter>
  );
}

export default App;