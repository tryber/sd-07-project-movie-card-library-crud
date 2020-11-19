import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './pages/index.js';
import './App.css'; 
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
