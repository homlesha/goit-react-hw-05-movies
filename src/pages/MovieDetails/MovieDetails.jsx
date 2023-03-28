import { getMovieDetails } from 'api/api';
import { useEffect, useState, Suspense } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { Image, Box, Title, Text } from './MovieDetails.styled';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('null');
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await getMovieDetails(movieId);
        setDetails(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);
  if (!details) {
    return null;
  }

  const { poster_path, title, genres, vote_average, overview, release_date } =
    details;
  if (!genres) {
    return;
  }
  const getGenres = genres => {
    return genres.map(genr => genr.name).join(',');
  };

  const date = new Date(release_date);

  return (
    <main>
      <div style={{ marginLeft: '25px' }}>
        <NavLink to= '/'>Go back</NavLink>
      </div>
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <Title>
            {title}({date.getFullYear()})
          </Title>
          <Text>User Score: {(vote_average * 10).toFixed()}%</Text>
          <Title>Overview</Title>
          <Text>{overview}</Text>
          <Title>Genres</Title>
          <Text>{getGenres(genres)}</Text>
        </div>
      </Box>
      <Text>Additional information</Text>
      <ul>
        <li>
          <NavLink to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="review">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
