import { useContext, useEffect, useState } from 'react';

import Title from '../../components/Title';
import Book from '../../app/domain/Book';
import BooksContext from '../../context/BooksContext';
import Header from '../../components/Header';
import Body from '../../components/Body';

export default function MainPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const booksContext = useContext(BooksContext) as Record<string, () => Promise<{ data: Book[]; error: unknown }>>;

  useEffect(() => {
    (async () => {
      const { data, error } = await booksContext.findBooks();
      if (error) {
        return;
      }

      setBooks(data);
    })();
  }, [booksContext]);

  return (
    <>
      <Title>Books list</Title>

      {books?.map((eachBook: Book) => {
        return (
          <div key={eachBook.id}>
            <img src={eachBook.coverUrl} alt={eachBook.title} />

            <Header>{eachBook.title}</Header>
          </div>
        );
      })}
    </>
  );
}
