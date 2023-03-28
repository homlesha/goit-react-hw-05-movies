import { getMovieCast } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Image, Text } from 'pages/MovieDetails/MovieDetails.styled';
const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await getMovieCast(movieId);
        setCast(result.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  if (!cast) return null;

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ name, profile_path, character, id }) => {
            return (
              <li key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/3/35/Waiting_Room_-_The_Noun_Project.svg'
                  }
                  alt={name}
                />
                <Text>{name}</Text>
                <Text>
                  <b>Character:</b> {character}
                </Text>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;
