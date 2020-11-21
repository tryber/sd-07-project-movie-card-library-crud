import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/" render={(props) => <MovieList {...props} />} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
