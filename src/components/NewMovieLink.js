import React from 'react';
import { Link } from 'react-router-dom';

class NewMovieLink extends React.Component {
  render() {
    return (
      <div className="new-movie">
        <Link to={"/movies/new"}>ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default NewMovieLink;
