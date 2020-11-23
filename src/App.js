import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Route path="/"><MovieList /></Route>
      <Route
        path="movies/:id"
        render={(props) => <MovieDetails
          {...props}
          title="recebe algo aqui"
        />}
      />
      <Route path="movies/new"><NewMovie /></Route>
      <Route
        path="/movies/:id/edit"
        render={(props) =>
          <EditMovie
            {...props}
            movie="editar movie"
        />}
      />
    </BrowserRouter>
  );
}

export default App;
