import { useFetchBooks } from '@hooks/useFetchBooks';
import Title from '@components/Title';
import { Header } from '@components/Layout';

export default function Books() {
  const { books, isLoading, hasError } = useFetchBooks();

  if (isLoading) return null;

  return (
    <>
      <Title>Books list</Title>
      {books?.map((book) => {
        return (
          <div key={book.id}>
            <img src={book.coverUrl} alt={book.title} />
            <Header>{book.title}</Header>
          </div>
        );
      })}
    </>
  );
}
