import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { movie } = this.props;
    const { imagePath, storyline, title, id } = movie;

    return (
      <div data-testid="movie-card">
        <div>
          <img src={imagePath} alt={`${title} screen`} />
          <p>{title}</p>
        </div>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
    rating: 10,
  },
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};


export default MovieCard;
