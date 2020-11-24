import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (    
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} ></Route>
          <Route path="/movies/new" component={NewMovie} ></Route>
          <Route path="/movies/:id" component={MovieDetails} ></Route>
          <Route path="/movies/:id/edit" component={EditMovie} ></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
