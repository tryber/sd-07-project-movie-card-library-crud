import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="ImagemETitulo">
          <img src={imagePath} alt="Capa do Filme" />
          <h3 className="movieTitle">{title}</h3>
        </div>
        <div className="storyline">
          <p>
            {storyline}
          </p>
        </div>
        <hr />
        <div className="details">
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    imagePath: '',
    title: 'Título do Filme',
    storyline: 'Sinopse',
    id: 0,
  }),
};

export default MovieCard;
