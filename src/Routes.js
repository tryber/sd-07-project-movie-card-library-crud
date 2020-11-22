import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  EditMovie,
  MovieList,
  MovieDetails,
  NewMovie,
  NotFound,
} from './pages/index';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {" "}
            <MovieList />{" "}
          </Route>
          <Route path="/movies/new">
            {" "}
            <NewMovie />{" "}
          </Route>
          <Route
            path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} />}
          />
          <Route
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route path="*">
            {" "}
            <NotFound />{" "}
          </Route>
          <Route path="/movies/*">
            {" "}
            <NotFound />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
