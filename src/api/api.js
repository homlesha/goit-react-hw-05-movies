import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const APIKEY = 'ca6a18deac59aabbceac0a2518e15600';

export async function getMoviesTrending() {
  const response = await axios.get(
    `trending/movie/day?api_key=${APIKEY}&language=en-US`
  );
  return response.data;
}

export async function getMoviesQuery(query) {
  const response = await axios.get(
    `search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false&include_adult=false`
  );
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${APIKEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${APIKEY}&language=en-US&page=1`
  );
  return response.data;
}

export async function getMovieReview(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  return response.data;
}
