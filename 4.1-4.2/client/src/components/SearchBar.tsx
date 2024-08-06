import React from 'react';
import '../App.css';


interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

function SearchBar({ query, setQuery }:SearchBarProps)  {
  return (
    <div style={{ backgroundColor: '#f5f5f5', height: '25px' }}>
      <input
        type="text"
        className="search"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
