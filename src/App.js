import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route component={NotFound} />
          <Route path='/' component={MovieList} />
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/movies/:id/edit' component={EditMovie} />
          <Route path='/movies/new' component={NewMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
