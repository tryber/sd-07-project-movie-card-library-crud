// implement SearchBar component here
import React from 'react';
import PropTybes from 'prop-types';

class SearchBar extends React.Component {
  inputSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="search-text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          data-key="searchText"
        />
      </label>
    );
  }

  bookmarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarked-change" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarked-change"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
          data-testid="checkbox-input"
          data-key="bookmarkedOnly"
        />
      </label>
    );
  }

  selectedGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selected-genre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
          data-key="selectedGenre"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option selected value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form
          // prettier-ignore
          onSubmit={(event) => event.preventDefault()}
          data-testid="search-bar-form"
        >
          {this.inputSearch()}
          {this.bookmarked()}
          {this.selectedGenre()}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTybes.string.isRequired,
  onSearchTextChange: PropTybes.func.isRequired,
  bookmarkedOnly: PropTybes.bool.isRequired,
  onBookmarkedChange: PropTybes.func.isRequired,
  selectedGenre: PropTybes.string.isRequired,
  onSelectedGenreChange: PropTybes.func.isRequired,
};

export default SearchBar;
