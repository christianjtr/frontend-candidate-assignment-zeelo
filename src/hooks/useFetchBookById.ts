import { useState, useEffect } from 'react';
import { getBookById } from '@services/apis/book/book.services';
import Book from '@app/domain/Book';

export interface UseFetchBookInterface {
  book: Book | null;
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchBook = (id: number): UseFetchBookInterface => {
  const [book, setBooks] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchBook = async () => {
    setIsLoading(true);

    try {
      const response = await getBookById(id);
      const { id: bookId, title, author, price, cover_url } = response;
      const responseDTO = new Book(bookId, title, author, price, cover_url);
      setBooks(responseDTO);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return {
    book,
    isLoading,
    hasError,
  };
};
