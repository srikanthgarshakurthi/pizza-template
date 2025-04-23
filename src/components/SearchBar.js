import React from 'react';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <p className="searchbar-title">Subscribe for Newsletter</p>
      <div className="searchbar-input-group">
        <input
          type="email"
          placeholder="Enter email"
          className="searchbar-input"
        />
        <button className="searchbar-button">Subscribe</button>
      </div>
    </div>
  );
};

export default SearchBar;
