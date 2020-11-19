import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <React.Fragment>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="*" component={NotFound} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
