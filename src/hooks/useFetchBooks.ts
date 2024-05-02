import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { getBooks } from '@services/apis/book/book.services';
import type { PaginatedType } from '@app-types/Paginated';
import type { CustomError } from '@utils/errors';
import Book from '@app/domain/Book';

export interface UseFetchBooksInterface {
  books: Book[];
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchBooks = (paginated?: PaginatedType): UseFetchBooksInterface => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchBooks = async () => {
    setIsLoading(true);

    try {
      const response = await getBooks(paginated);
      const responseDTO = response.map(
        (item) => new Book(item.id, item.title, item.author, item.price, item.cover_url),
      );
      setBooks(responseDTO);
    } catch (error) {
      const {
        error: { code, message },
      } = error as { error: CustomError };

      setHasError(true);
      toast(`[Error - ${code}] : ${message}`, { className: 'toaster toaster--error' });
      throw new Error(message);
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
