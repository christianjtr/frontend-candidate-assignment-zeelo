import { useState, useEffect } from 'react';
import { getBookById } from '@services/apis/book/book.services';
import Book from '@app/domain/Book';

export interface UseFetchBookInterface {
  book: Book | null;
  refetch: () => Promise<void>;
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchBook = (id: number): UseFetchBookInterface => {
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchBook = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await getBookById(id);
      const { id: bookId, title, author, price, cover_url, genres, description } = response;
      const responseDTO = new Book(bookId, title, author, price, cover_url, genres, description);
      setBook(responseDTO);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchBook();
  }, [id]);

  return {
    book,
    refetch: fetchBook,
    isLoading,
    hasError,
  };
};
