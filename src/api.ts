const apiBaseUrl = 'https://api.themoviedb.org/3';
export const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';

export const getPopularMovies = async () => {
  try {
    const res = await fetch(
      `${apiBaseUrl}/movie/popular?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getMovieDetails = async (movieId: string | undefined) => {
  try {
    const res = await fetch(
      `${apiBaseUrl}/movie/${movieId}?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const searchMovies = async (query: string) => {
  try {
    const res = await fetch(
      `${apiBaseUrl}/search/movie?api_key=${
        process.env.REACT_APP_THE_MOVIE_DB_API_KEY
      }&query=${encodeURI(query)}`
    );
    const data = await res.json();

    return data.results.length ? data.results : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
