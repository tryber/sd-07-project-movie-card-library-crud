import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages';
// switch permite selecionar um de cada vez
// switch serve para renderizar com props
// {...props} tem que ser passado assim para aceitar os props
// route e link trabalham em conjunto, tem que olhar se a url bate com o to
// "/users/:id" qualquer id que eu passar na url renderiza

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route
            path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} />}
          />
          <Route
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
