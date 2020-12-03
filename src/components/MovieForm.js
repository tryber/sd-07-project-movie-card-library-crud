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
    const { stitle } = this.state;

    return (
      <div>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={stitle}
          onChange={(event) => this.updateMovie('stitle', event.target.value)}
        />
        <label htmlFor="movie_title">Título</label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { ssubtitle } = this.state;

    return (
      <div>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={ssubtitle}
          onChange={(event) => this.updateMovie('ssubtitle', event.target.value)}
        />
        <label htmlFor="movie_subtitle">Subtítulo</label>
      </div>
    );
  }

  renderImagePathInput() {
    const { simagePath } = this.state;

    return (
      <div className="row">
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={simagePath}
          onChange={(event) => this.updateMovie('simagePath', event.target.value)}
        />
        <label htmlFor="movie_image">Imagem</label>
      </div>
    );
  }

  renderStorylineInput() {
    const { sstoryline } = this.state;

    return (
      <div>
        <textarea
          id="movie_storyline"
          value={sstoryline}
          onChange={(event) => this.updateMovie('sstoryline', event.target.value)}
        />
        <label htmlFor="movie_storyline">Sinopse</label>
      </div>
    );
  }

  renderGenreSelection() {
    const { sgenre } = this.state;

    return (
      <div>
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={sgenre}
          onChange={(event) => this.updateMovie('sgenre', event.target.value)}
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
    const { srating } = this.state;

    return (
      <div>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={srating}
          onChange={(event) => this.updateMovie('srating', event.target.value)}
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
        <form>
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

MovieForm.propTypes = {
  movie: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};
MovieForm.defaultProps = {
  movie: PropTypes.shape({}),
  onSubmit: PropTypes.func,
};
