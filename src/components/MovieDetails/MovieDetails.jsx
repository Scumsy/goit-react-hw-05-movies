import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getMovieDetails } from '../MoviesAPI/GetMovies';
import { MovieCard } from '../MovieCard/MovieCard';

export default function MovieDetailsContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await getMovieDetails(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-center',
        });
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <>
      {item && <MovieCard item={item} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
