const key = 'af46cf9ae9296aa9f61ac6e8b6ec14d3'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=star%20wars&include_adult=false&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=scary%20movie&include_adult=false&language=en-US&page=1`
};

export const baseImagePath = ({size, path}) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export default requests



