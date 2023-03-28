import { useState } from 'react';

export const SearchMovies = ({ setSearch }) => {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ movies: input });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search Movies"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />

      <button type="submit">Search</button>
    </form>
  );
};
