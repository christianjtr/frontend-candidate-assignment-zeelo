import { useParams, useNavigate } from 'react-router-dom';
import { Button, PageHeader } from '@components';
import { useFetchBook } from '@hooks/useFetchBookById';
import { StyledBookDetails } from './BookDetails.styled';

export default function BookDetails() {
  const navigate = useNavigate();
  const { bookId } = useParams<string>();

  const { book, isLoading, hasError } = useFetchBook(+bookId!);

  const handleOnClickBackButton = (): void => {
    navigate(-1);
  };

  if (isLoading) return null;

  return (
    <StyledBookDetails>
      <PageHeader>
        <Button onClick={handleOnClickBackButton}>Back</Button>
      </PageHeader>
      <div className="card">
        <figure className="featured-image">
          <img src={book?.coverUrl} alt={book?.title} />
        </figure>
        <div className="card-body">
          <span className="pre-heading">{book?.author}</span>
          <h3 className="title">{book?.title}</h3>
          <p className="meta">
            <span className="author">{book?.description}</span>
          </p>
          <div className="chips">
            <a className="chip">Government</a>
            <a className="chip">Test</a>
            <a className="chip">Utilidata</a>
          </div>
        </div>
      </div>
    </StyledBookDetails>
  );
}
