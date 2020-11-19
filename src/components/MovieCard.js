import React from 'react';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.movie,
    };
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, subtitle } = movie;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
