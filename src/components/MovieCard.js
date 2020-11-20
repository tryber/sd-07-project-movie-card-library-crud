import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title } = movie;
    return (
      <div data-testid="movie-card">
        {title}
      </div>
    );
  }
}

export default MovieCard;
