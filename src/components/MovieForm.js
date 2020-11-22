import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    let value = newValue;
    if (field === 'rating' && newValue !== '') {
      value = parseFloat(newValue);
    } else if (field === 'rating' && newValue === '') {
      value = 0;
    }
    this.setState({ [field]: value });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="field-form">
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate font-size"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
          size="80"
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="field-form">
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
          className="font-size"
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row field-form">
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
          className="font-size"
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="field-form">
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
          className="font-size"
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="field-form">
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
          className="font-size"
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="field-form">
        <label htmlFor="movie_rating">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
          className="font-size"
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={this.handleSubmit}
          className="submit-button"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="container-form">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          <div className="submit-button-container">
            {this.renderSubmitButton()}
          </div>
        </form>
      </div>
    );
  }
}

MovieForm.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    genre: '',
    rating: 0,
  },
  onSubmit: '',
};
MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func,
};

export default MovieForm;
