import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route
        path="/"
        render={
          function pathname(props) {
            return (props.location.pathname === '/') ? <MovieList /> : <NotFound />;
          }
        }
      />;
    </BrowserRouter>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
}.isRequired;
export default App;
