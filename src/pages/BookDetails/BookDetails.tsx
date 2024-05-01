import { useParams, useNavigate } from 'react-router-dom';
import { Button, PageHeader, Chip } from '@components';
import { useFetchBook } from '@hooks/useFetchBookById';
import { formatAsCurrency } from '@utils/formatNumber';
import { StyledBookDetails } from './BookDetails.styled';

export default function BookDetails() {
  const navigate = useNavigate();
  const { bookId } = useParams<string>();

  const { book, isLoading, hasError } = useFetchBook(+bookId!);

  const handleOnClickBackToHomeButton = (): void => {
    navigate('/', { replace: true });
  };

  const formattedPrice = formatAsCurrency(book?.price ?? 0);

  if (isLoading) return null;

  return (
    <StyledBookDetails>
      <PageHeader>
        <Button onClick={handleOnClickBackToHomeButton}>Back</Button>
      </PageHeader>
      <div className="card">
        <div className="ribbon">{formattedPrice}</div>
        <figure className="card-image">
          <img src={book?.coverUrl} alt={book?.title} />
        </figure>
        <div className="card-body">
          <span className="card-pre-heading">{book?.author}</span>
          <h3 className="card-title">{book?.title}</h3>
          <p className="card-description">{book?.description}</p>
          <div className="card-chips-container">
            {book?.genres?.map((genre, index) => <Chip key={`genre_${genre}_${index}`}>{genre}</Chip>)}
          </div>
        </div>
      </div>
    </StyledBookDetails>
  );
}
