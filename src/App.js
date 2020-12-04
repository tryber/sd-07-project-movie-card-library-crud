import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { MovieDetails, MovieList, NotFound, NewMovie, EditMovie } from './pages';
import './App.css';

class App extends React.Component {
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
        <Router>
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
        </Router>
      </div>
    );
  }
}
export default App;
