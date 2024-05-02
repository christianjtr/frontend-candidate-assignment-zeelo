import Book from '@app/domain/Book';
import { BookAPIResponse } from './Book';

export namespace PurchaseAPIResponse {
  export interface Purchase {
    id: number;
    books: BookAPIResponse.Book[];
    date: string;
    total: number;
  }
}

export type Purchase = Omit<PurchaseAPIResponse.Purchase, 'books'> & {
  books: Book[];
};
