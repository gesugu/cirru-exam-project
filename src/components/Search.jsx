import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <input 
      type="text" 
      placeholder="search" 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
};

export default Search;