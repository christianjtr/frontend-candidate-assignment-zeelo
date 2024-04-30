import { debounce } from '../../../utils/debounce';
import database from './database.json';
import { failRandomly, ErrorCode } from '../../../utils/errors';
import Book from '../../domain/Book';

type paginatedType = {
  page?: number;
  perPage?: number;
};

export async function findBooks({ page = 1, perPage = 25 }: paginatedType = {}) {
  await debounce();

  if (failRandomly()) {
    return { error: { code: ErrorCode.SOMETHING_WENT_WRONG } };
  }

  return {
    data: database.books.slice((page - 1) * perPage, page * perPage - 1).map((eachBook) => {
      return new Book(eachBook.id, eachBook.title, eachBook.author, eachBook.price);
    }),
  };
}
