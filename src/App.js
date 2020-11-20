import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={() => <MovieList />} />

        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />


        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
