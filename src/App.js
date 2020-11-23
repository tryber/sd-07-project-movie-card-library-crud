import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route path="/" component={MovieList}/>
       <Route path="/movies/:id" component={MovieDetails}/>
       <Route path="/movies/new" component={NewMovie}/>
       <Route path="/movie/:id/edit" component={EditMovie}/>
       <Route exact path="/" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
