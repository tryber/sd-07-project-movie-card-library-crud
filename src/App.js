import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  NotFound,
  EditMovie,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="add-card">
        <Link
          className="link"
          to="/movies/new"
        >ADICIONAR CARTÃO</Link>
      </div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
