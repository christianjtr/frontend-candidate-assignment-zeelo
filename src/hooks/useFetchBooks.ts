import { useState, useEffect } from 'react';
import { getBooks } from '@services/apis/book/book.services';
import Book from '@app/domain/Book';

export interface UseFetchBooksInterface {
  books: Book[];
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchBooks = (): UseFetchBooksInterface => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchBooks = async () => {
    setIsLoading(true);

    try {
      const response = await getBooks();
      const responseDTO = response.map(
        (item) => new Book(item.id, item.title, item.author, item.price, item.cover_url),
      );
      setBooks(responseDTO);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    isLoading,
    hasError,
  };
};
