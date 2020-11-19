import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MovieList} exact/>
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route path='/movies/new' component={NewMovie}/>
        <Route path='/movies/:id/edit' component={EditMovie}/>      
        <Route path='*' component={NotFound}/>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
