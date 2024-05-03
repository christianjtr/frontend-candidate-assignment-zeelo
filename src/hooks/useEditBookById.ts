import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { editById } from '@services/apis/book/book.services';
import Book from '@app/domain/Book';
import type { BookAPIRequest } from '@app-types/Book';

export interface UseEditBookByIdInterface {
  editBook: (id: number, data: Omit<Book, 'id'>) => Promise<void>;
  isLoading: boolean;
  hasError: boolean;
}

export const useEditBookById = (): UseEditBookByIdInterface => {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const convertToAPIEntity = (data: Omit<Book, 'id'>): BookAPIRequest.Book => {
    return {
      title: data.title,
      author: data.author,
      price: +data.price,
      cover_url: data.coverUrl,
      genres: data.genres,
      description: data.description,
    };
  };

  const editBook = async (id: number, data: Omit<Book, 'id'>): Promise<void> => {
    setIsLoading(true);

    try {
      const payload = convertToAPIEntity(data);
      const { message, isSuccess } = await editById(id, payload);
      setIsLoading(false);
      setHasError(!isSuccess);
      setMessage(message);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        className: `toaster ${hasError ? 'toaster--error' : 'toaster--success'}`,
      });
    }
  }, [message]);

  return {
    editBook,
    isLoading,
    hasError,
  };
};
