import React from 'react';
import PropTypes from 'prop-types';

import Button from '../styles/Button';
import { MovieFormWrapper, FormWrapper, FormLine } from '../styles/MovieForm';

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
      <FormLine>
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </FormLine>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <FormLine>
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </FormLine>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <FormLine className="row">
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </FormLine>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <FormLine>
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </FormLine>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <FormLine>
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </FormLine>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <FormLine>
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
        />
      </FormLine>
    );
  }

  renderSubmitButton() {
    return (
      <FormLine>
        <Button
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </FormLine>
    );
  }

  render() {
    return (
      <MovieFormWrapper>
        <FormWrapper>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </FormWrapper>
      </MovieFormWrapper>
    );
  }
}

MovieForm.defaultProps = { movie: PropTypes.object };

MovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
