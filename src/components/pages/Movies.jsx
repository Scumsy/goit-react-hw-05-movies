import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { SearchMovies } from '../MoviesAPI/GetMovies';
import { Searchbar } from 'components/SearchBar/Searchbar';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const onSubmit = data => {
    setSearchParams({ query: data });
  };

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }

    async function SearchMovieList() {
      console.log(query);
      try {
        const cardSearch = await SearchMovies(query);
        console.log(cardSearch);
        if (cardSearch.length === 0) {
          toast.error(
            'Sorry, there are no films matching your search query. Please, try again.',
            {
              position: 'top-center',
            }
          );
        }
        setMovies(cardSearch);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-center',
        });
      }
    }

    SearchMovieList();
  }, [query]);

  return (
    <>
      <main>
        <Searchbar onSubmit={onSubmit} />
      </main>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
