import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from '../MoviesAPI/GetMovies';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -8);

  useEffect(() => {
    async function Reviews() {
      try {
        const reviewItem = await getMovieReview(id);
        setReviews(reviewItem);
      } catch (error) {
        console.log(error);
      }
    }
    Reviews();
  }, [id]);

  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don`t have any reviews for this movie.</p>;
  }
};
