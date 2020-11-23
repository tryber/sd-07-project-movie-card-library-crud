import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';


class App extends React.component {
  renderRoutes() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={MovieList}
        />
        <Route
          path="/movies/:id"
          component={MovieDetails}
        />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <div className="App">
        <h1> Movie Card Library CRUD</h1>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default App;
