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
      <div className="cont-movie">
        <h1>Movie Card Library CRUD</h1>
        <Link className="link" to="/movies/new" >ADICIONAR CARTÃO</Link>
        <Switch>
          <Route exact path="/" component={() => <MovieList />} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
