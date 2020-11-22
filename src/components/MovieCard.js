import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class MovieCard extends React.Component {
  
  render() {
    const {title,id, subtitle, imagePath, rating, storyline} = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
          <div className="image-card">
            <img src={imagePath} alt={title}/>
          </div>
          <div className="body-card">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          </div>
          <div className="bottom-card">
          <Link to={`movies/${id}`}>
                <button className="btn-details">Ver detalhes</button>
              </Link>
            <div className="rating">
              {rating}
            </div>
          </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard;
