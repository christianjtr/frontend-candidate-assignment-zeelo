import Book from '@app/domain/Book';
import { formatAsCurrency } from '@utils/formatNumber';
import { StyledBookCard } from './BookCard.styled';

export interface BookCardProps {
  book: Book;
  onClick?: <T>(...args: T[]) => void;
}

export default function BookCard(props: BookCardProps) {
  const {
    book: { id, title, author, price, coverUrl },
    onClick: onClickCallback,
  } = props;

  const formattedPrice = formatAsCurrency(price ?? 0);

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    if (typeof onClickCallback === 'function') {
      onClickCallback(id);
    }
  };

  return (
    <StyledBookCard>
      <div className="book-card">
        <figure>
          <img src={coverUrl} alt={title} />
        </figure>
        <div className="card-content">
          <h2>{title}</h2>
          <p className="author">{`By ${author}`}</p>
          <p className="price">{formattedPrice}</p>
          <a href="#" role="button" aria-label={`Link to ${title} detail`} onClick={handleOnClick}>
            See details
          </a>
        </div>
      </div>
    </StyledBookCard>
  );
}
