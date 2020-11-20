import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <MovieList {...props} />} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
