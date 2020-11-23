import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import MovieList from './pages/MovieList.js';
import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import NotFound from './pages/NotFound.js';

class App extends Component {

  constructor() {
    super();

    this.changeAddCard = this.changeAddCard.bind(this);

    this.state = {
      addCard: true,
    };
  }

  changeAddCard() {
    this.setState(() => ({ addCard: false }));
  }

  render() {
    const { addCard } = this.state;

    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          { addCard ? <Link to="/movies/new" onClick={this.changeAddCard}>ADICIONAR CARTÃO</Link> : ''}
          <Switch>
            <Route exact path="/" component={MovieList} />;
            <Route path="/movies/new" component={NewMovie} />;
            <Route
              exact path="/movies/:id"
              render={(props) =>
                <MovieDetails
                  id={parseInt(props.match.params.id, 10)}
                />
              }
            />;
            <Route
              path="/movies/:id/edit"
              render={(props) =>
                <EditMovie
                  id={parseInt(props.match.params.id, 10)}
                />
              }
            />;
            <Route path="/NotFound" component={NotFound} />
            <Redirect to="/NotFound" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
