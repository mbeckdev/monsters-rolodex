import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    // onChange={(e) => this.setState({ searchField: e.target.value })}
  />
);

export { SearchBox };
