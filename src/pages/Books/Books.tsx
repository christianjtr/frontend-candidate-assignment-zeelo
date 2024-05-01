import { useNavigate } from 'react-router-dom';
import { useFetchBooks } from '@hooks/useFetchBooks';
import { Button, Title, PageHeader, BookCard } from '@components';
import { StyledBooks } from './Books.styled';

export default function Books() {
  const navigate = useNavigate();
  const { books, isLoading, hasError } = useFetchBooks();

  const handleOnClickBookItem: <T>(bookId: T) => void = (bookId): void => {
    navigate(`/books/${bookId}`);
  };

  if (isLoading) return null;

  return (
    <StyledBooks>
      <PageHeader>
        <Title>Available books</Title>
        <Button onClick={() => {}}>Add new book</Button>
      </PageHeader>
      <div className="grid-container">
        {books?.map((book) => <BookCard key={book.id} book={book} onClick={handleOnClickBookItem} />)}
      </div>
    </StyledBooks>
  );
}
