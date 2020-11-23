import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import './App.css';
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
    if (this.state.addCard) {
      this.setState(() => ({ addCard: false }));
    } else {
      this.setState(() => ({ addCard: true }));
    }
  }

  render() {
    const { addCard } = this.state;

    return (
      <div className="main">
        <div className="movie-card-header page-title">Movie Card Library CRUD</div>
        <BrowserRouter>
          { addCard ?
            <div className="add-card">
              <Link
                className="link"
                to="/movies/new"
                onClick={this.changeAddCard}
              >ADICIONAR CARTÃO</Link>
            </div> : ''
          }
          <Switch>
            <Route
              exact path="/"
              render={() => <MovieList onClick={this.changeAddCard} />}
            />;
            <Route
              path="/movies/new"
              render={() => <NewMovie onSubmit={this.changeAddCard} />}
            />;
            <Route
              exact path="/movies/:id"
              render={(props) =>
                <MovieDetails
                  id={parseInt(props.match.params.id, 10)}
                  onClick={this.changeAddCard}
                />
              }
            />;
            <Route
              path="/movies/:id/edit"
              render={(props) =>
                <EditMovie
                  id={parseInt(props.match.params.id, 10)}
                  onSubmit={this.changeAddCard}
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
