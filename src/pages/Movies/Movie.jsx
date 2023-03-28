import { getMoviesQuery } from 'api/api';
import { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { SearchMovies } from 'components/SearchMovie/SearchMovie';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movies');
  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) return;
      try {
        const result = await getMoviesQuery(query);
        setMovies(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [query]);
  return (
    <main>
      <SearchMovies setSearch={setSearchParams} />
      {movies.length > 0 &&
        movies.map(({ id, original_title }) => {
          return (
            <ul key={id}>
              <li>
                <NavLink to={`${id}`}>{original_title}</NavLink>
              </li>
            </ul>
          );
        })}
    </main>
  );
};
export default Movie;
