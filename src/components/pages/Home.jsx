import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchTrendingMovies } from '../MoviesAPI/GetMovies';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await FetchTrendingMovies();
        setMovieList(response);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-center',
        });
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {movieList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
}
