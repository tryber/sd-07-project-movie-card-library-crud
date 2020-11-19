import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={MovieList} />
      </main>
    </BrowserRouter>
  );
}

export default App;