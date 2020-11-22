import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';


function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
      <Route exact path="/:any" component={NotFound} />
    </Router>
  );
}

export default App;
