import { useNavigate } from 'react-router-dom';
import { useFetchBooks } from '@hooks';
import { Button, Title, PageHeader, BookCard, LoaderSpinner, BlankState } from '@components';
import { StyledBooks } from './Books.styled';

export default function Books() {
  const navigate = useNavigate();
  const { books, isLoading } = useFetchBooks();

  const handleOnClickOnNewBook = (): void => {
    navigate(`/books/new`);
  };

  const handleOnClickBookItem: <T>(bookId: T) => void = (bookId): void => {
    navigate(`/books/${bookId}`);
  };

  const hasBooks = books?.length > 0;

  if (isLoading) return <LoaderSpinner />;

  return (
    <StyledBooks>
      <PageHeader>
        <Title>Available books</Title>
        <Button onClick={handleOnClickOnNewBook}>Add new book</Button>
      </PageHeader>
      {!hasBooks && <BlankState state="no_data" message="There are no books at this time!" />}
      {hasBooks && (
        <div className="grid-container">
          {books?.map((book) => <BookCard key={book.id} book={book} onClick={handleOnClickBookItem} />)}
        </div>
      )}
    </StyledBooks>
  );
}
