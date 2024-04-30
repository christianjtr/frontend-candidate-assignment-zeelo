import type { BookAPIResponse } from '@app-types/Book';
import config from './config';

const { BASE_BOOKS_API_URL } = config;

async function getBooks(): Promise<BookAPIResponse.Book[]> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/books`);
    const books = await response.json();
    return books;
  } catch (error) {
    throw error;
  }
}

async function getBookById(id: number): Promise<BookAPIResponse.Book> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/books/${id}`);
    const book = await response.json();
    return book;
  } catch (error) {
    throw error;
  }
}

export { getBooks, getBookById };
