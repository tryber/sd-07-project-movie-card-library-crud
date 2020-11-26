import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route 
            exact 
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route 
            exact 
            path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
