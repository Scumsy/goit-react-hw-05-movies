import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMovieCredits } from '../MoviesAPI/GetMovies';
import { ActorImg, ActorList } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const location = useLocation();
  const preId = location.pathname.slice(8);
  const id = preId.slice(0, -5);

  useEffect(() => {
    async function FetchActors() {
      try {
        const actorsList = await getMovieCredits(id);
        setActors(actorsList);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-right',
        });
      }
    }
    FetchActors();
  }, [id]);

  return (
    <>
      {actors !== [] && (
        <ActorList>
          {actors.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              {profile_path ? (
                <ActorImg
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="No image"
                />
              ) : (
                <ActorImg
                  src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
                  alt="Not found"
                  height={300}
                  width={200}
                />
              )}
              <div>
                <p>Name: {original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ActorList>
      )}
    </>
  );
};
