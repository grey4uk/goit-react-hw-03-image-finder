import React from "react";

const SearchBar = ({handleChange,handleSubmit}) => {
  return (
    
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    
  );
};

export default SearchBar;
