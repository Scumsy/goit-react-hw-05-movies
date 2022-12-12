import axios from 'axios';

const API_KEY = '0a1348e80b2fb03a15aa2a20ba9eabc0';

export async function FetchTrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function SearchMovies(query) {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  );
  return search.data.results;
}

export async function getMovieDetails(id) {
  const details = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return details.data;
}

export async function getMovieCredits(id) {
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return credits.data.cast;
}

export async function getMovieReview(id) {
  const review = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return review.data.results;
}
