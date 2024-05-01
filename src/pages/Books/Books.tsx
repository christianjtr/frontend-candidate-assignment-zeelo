import { useNavigate } from 'react-router-dom';
import { useFetchBooks } from '@hooks/useFetchBooks';
import Title from '@components/Title';
import Button from '@components/Button';
import { BookCard } from '@components/BookCard';
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
      <div className="header-container">
        <Title>Available books</Title>
        <Button onClick={() => {}}>Add new book</Button>
      </div>
      <div className="grid-container">
        {books?.map((book) => <BookCard key={book.id} book={book} onClick={handleOnClickBookItem} />)}
      </div>
    </StyledBooks>
  );
}
