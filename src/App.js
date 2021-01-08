// Projeto CRUD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound}  from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/" component={ MovieList }/>
        <Route exact path="/movies/:id/edit" component={ EditMovie }/>
        <Route exact path="/movies/:id" component={ MovieDetails }/>
        <Route exact path="/movies/new" component={ NewMovie }/>
        <Route component={ NotFound }/>
      </Switch>
    </Router>
  );
}

export default App;
