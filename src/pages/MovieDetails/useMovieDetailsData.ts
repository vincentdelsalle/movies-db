import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getMovieDetails, posterBaseUrl } from '../../api';
import { MovieDetailsProps } from '../../components/MovieDetails';

type MovieDetailsDataType = {
  loading: boolean;
  movieDetails: MovieDetailsProps;
  errorMessage?: string;
};

export const useMovieDetailsData = (): MovieDetailsDataType => {
  const { movieId } = useParams();
  const movieDetailsResult = useQuery(['details', movieId], () =>
    getMovieDetails(movieId)
  );

  return {
    loading: movieDetailsResult.isLoading,
    movieDetails: {
      details: {
        title: movieDetailsResult?.data?.title,
        overview: movieDetailsResult?.data?.overview,
        voteAverage: movieDetailsResult?.data?.vote_average,
        posterPath: `${posterBaseUrl}${movieDetailsResult?.data?.poster_path}`,
      },
    },
    errorMessage:
      !movieDetailsResult?.data?.success &&
      movieDetailsResult?.data?.status_message,
  };
};
