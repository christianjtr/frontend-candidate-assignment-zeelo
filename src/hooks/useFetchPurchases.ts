import { useState, useEffect } from 'react';
import { getPurchases } from '@services/apis/book/purchases.services';
import Book from '@app/domain/Book';
import type { Purchase, PurchaseAPIResponse } from '@app-types/Purchase';

export interface UseFetchPurchaseInterface {
  purchases: Purchase[];
  isLoading: boolean;
  hasError: boolean;
}

export const useFetchPurchases = (): UseFetchPurchaseInterface => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const mapToPurchaseDTO = (data: PurchaseAPIResponse.Purchase[]): Purchase[] => {
    return data.map(({ books, ...rest }) => {
      return {
        ...rest,
        books: books.map(
          (book) =>
            new Book(book.id, book.title, book.author, book.price, book.cover_url, book.genres, book.description),
        ),
      };
    });
  };

  const fetchPurchases = async () => {
    setIsLoading(true);

    try {
      const response = await getPurchases();
      const responseDTO = mapToPurchaseDTO(response);
      setPurchases(responseDTO);
    } catch (error) {
      setHasError(true);
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  return {
    purchases,
    isLoading,
    hasError,
  };
};
