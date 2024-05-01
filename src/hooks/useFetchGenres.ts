import { useState, useEffect } from 'react';
import { getGenres } from '@services/apis/book/genres.services';
import type { Genre } from '@app-types/Genre';

export interface UseFetchGenresInterface {
  genres: Genre[];
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchGenres = (): UseFetchGenresInterface => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchGenres = async () => {
    setIsLoading(true);

    try {
      const response = await getGenres();
      const genres = response.sort((a: Genre, b: Genre) => {
        return a.genre.localeCompare(b.genre);
      });
      setGenres(genres);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return {
    genres,
    isLoading,
    hasError,
  };
};
