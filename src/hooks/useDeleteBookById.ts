import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { deleteBookById } from '@services/apis/book/book.services';

export interface UseDeleteBookByIdInterface {
  deleteBook: (id: number) => Promise<void>;
  message: string | null;
  isLoading: boolean;
  hasError: boolean;
}

export const useDeleteBookById = (): UseDeleteBookByIdInterface => {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const deleteBook = async (id: number): Promise<void> => {
    setIsLoading(true);

    try {
      const { message, isSuccess } = await deleteBookById(id);
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
    deleteBook,
    message,
    isLoading,
    hasError,
  };
};
