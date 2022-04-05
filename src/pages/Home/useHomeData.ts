import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getPopularMovies, posterBaseUrl, searchMovies } from '../../api';
import { MoviesListingProps } from '../../components/MoviesListing';
import { SearchInputProps } from '../../components/SearchInput';

type HomeDataType = {
  loading: boolean;
  searchInput: SearchInputProps;
  movieListing: MoviesListingProps;
  errorMessage?: string;
};

export const useHomeData = (): HomeDataType => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const popularMoviesResult = useQuery('popular', getPopularMovies);

  useEffect(() => {
    if (popularMoviesResult?.data?.results) {
      setMovies(popularMoviesResult.data.results);
    }
  }, [popularMoviesResult?.data?.results]);

  const goToMovieDetails = (movieId: number) => {
    navigate(`/movie-details/${movieId}`);
  };

  const handleSearch = () => {
    if (searchContent !== '') {
      setIsSearching(true);
      searchMovies(searchContent.trim()).then((movies) => {
        setMovies(movies);
        setIsSearching(false);
      });
    }
  };
  const handleChange = (event: any) => {
    setSearchContent(event.target.value);
  };

  const clearInput = () => setSearchContent('');

  return {
    loading: popularMoviesResult.isLoading || isSearching,
    searchInput: {
      placeholder: 'Rechercher un film',
      searchContent,
      handleChange,
      handleSearch,
      clearInput,
    },
    movieListing: {
      movies,
      posterBaseUrl,
      goToMovieDetails,
    },
    errorMessage:
      !popularMoviesResult?.data?.success &&
      popularMoviesResult?.data?.status_message,
  };
};
