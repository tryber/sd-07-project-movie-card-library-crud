import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    );
    
}

export default App;
