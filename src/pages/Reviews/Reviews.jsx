import { getMovieReview } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const result = await getMovieReview(movieId);
        setReview(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [movieId]);
  if (!review || review.length === 0)
    return <p>We don't have any reviews for this movie.</p>;
  return (
    <>
      <hr />
      <ul>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <b>{author}</b>
            </p>

            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Review;
