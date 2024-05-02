import type { BookAPIResponse, BookAPIRequest } from '@app-types/Book';
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

async function create(payload: BookAPIRequest.Book): Promise<BookAPIResponse.GenericResponse<unknown>> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    return {
      message: response.ok ? 'A new book was created' : 'Unable to create a book',
      isSuccess: response.ok,
    };
  } catch (error) {
    throw error;
  }
}

async function deleteBookById(id: number): Promise<BookAPIResponse.GenericResponse<unknown>> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/books/${id}`, { method: 'DELETE' });

    return {
      message: response.ok ? 'Book was deleted' : 'Unable to delete the book',
      isSuccess: response.ok,
    };
  } catch (error) {
    throw error;
  }
}

export { getBooks, getBookById, create, deleteBookById };
