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

  const handleOnClick = (): void => {
    if (typeof onClickCallback === 'function') {
      onClickCallback(id);
    }
  };

  return (
    <StyledBookCard>
      <figure>
        <img src={coverUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2>{title}</h2>
        <p>
          <span>{author}</span>
          <span>{formattedPrice}</span>
        </p>
        <button type="button" onClick={handleOnClick}>
          Button
        </button>
      </div>
    </StyledBookCard>
  );
}
