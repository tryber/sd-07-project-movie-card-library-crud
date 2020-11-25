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
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate movie-form movie-form-size"
          value={title || ''}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
        <label htmlFor="movie_title">Título</label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <input
          className="movie-form movie-form-size"
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle || ''}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
        <label htmlFor="movie_subtitle">Subtítulo</label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <input
          className="movie-form movie-form-size"
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath || ''}
          onChange={(event) =>
            this.updateMovie('imagePath', event.target.value)
          }
        />
        <label htmlFor="movie_image">Imagem</label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <textarea
          id="movie_storyline"
          className="movie-form movie-form-size"
          value={storyline || ''}
          onChange={(event) =>
            this.updateMovie('storyline', event.target.value)
          }
        />
        <label htmlFor="movie_storyline">Sinopse</label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div>
        <select
          id="movie_genre"
          className="movie-form movie-form-size"
          value={genre || ''}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
        <label htmlFor="movie_genre">Gênero</label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div>
        <input
          placeholder="Dê a avaliação do filme"
          className="movie-form movie-form-size"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating || 0}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
        <label htmlFor="movie_rating">Avaliação</label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          className="movie-form-button movie-form"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="formulario movie-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default MovieForm;
