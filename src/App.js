import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <div className="mainDiv">
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movies/new" component={NewMovie} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies/:id/edit" component={EditMovie} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
