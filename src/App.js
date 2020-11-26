import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/new" render={(props) => <NewMovie {...props} />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route
          path="/"
          render={
            function verifyPath(props) {
              if (props.location.pathname !== '/') {
                return <NotFound />;
              }
              return <MovieList {...props} />;
            }
          }
        />
      </Switch>
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
