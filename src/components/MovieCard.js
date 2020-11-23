import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  bookmarked(bookmarked) {
    if (bookmarked) {
      return <img src="../img/favorite.png" alt="favorite" />;
    }
    return <img src="../img/favorite-gray.png" alt="favorite" />;
  }

  star(index, rating) {
    const starGrayFull = '../img/star-gray-full.png';
    const starGrayQuarter = '../img/star-gray-quarter.png';
    const starGoldFull = '../img/star-gold-full.png';
    const starGoldHalf = '../img/star-gold-half.png';
    const starGoldQuarter = '../img/star-gold-quarter.png';

    if (index <= rating) {
      return (starGoldFull);
    } else if (index - 1 >= rating) {
      return (starGrayFull);
    }
    let starPath = '';

    if (rating - Math.floor(rating) <= 0.33) {
      starPath = starGoldQuarter;
    } else if (rating - Math.floor(rating) <= 0.67) {
      starPath = starGoldHalf;
    } else {
      starPath = starGrayQuarter;
    }

    return (starPath);
  }

  rating(rating) {
    const starPath = [
      this.star(1, rating),
      this.star(2, rating),
      this.star(3, rating),
      this.star(4, rating),
      this.star(5, rating),
    ];

    return starPath;
  }

  render() {
    const {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = this.props.movie;

    let starPath = [];
    const key = [1, 2, 3, 4, 5];
    starPath = this.rating(rating);
    return (
      <div className="card" data-testid="movie-card">
        <div>
          <p className="bookmarked">{this.bookmarked(bookmarked)}</p>
          <img
            className="card-image"
            src={`../${imagePath}`}
            alt="Capa do filme"
          />
          <div className="text">
            <h4 className="title">{title}</h4>
            <h5 className="sub-title">{subtitle}</h5>
            <p className="story-line">{storyline}</p>
          </div>
        </div>
        <div className="card-footer">
          <p>{genre}</p>
          <p>
            {starPath.map((star, index) => (
              <img key={key[index]} className="stars" src={star} alt="favorite" />
            ))}
          </p>
        </div>
        <Link className="button-detail" to={`/movies/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
