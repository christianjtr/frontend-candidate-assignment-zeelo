import type { GenreAPIResponse } from '@app-types/Genre';
import config from './config';

const { BASE_BOOKS_API_URL } = config;

async function getGenres(): Promise<GenreAPIResponse.Genre[]> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/genres`);
    const genres = await response.json();
    return genres;
  } catch (error) {
    throw error;
  }
}

export { getGenres };
