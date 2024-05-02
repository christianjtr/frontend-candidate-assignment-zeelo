import { useNavigate } from 'react-router-dom';
import type { Purchase } from '@app-types/Purchase';
import { formatAsCurrency } from '@utils/formatNumber';
import { formatDate } from '@utils/formatDates';
import { StyledPurchase } from './Purchase.styled';

export interface PurchaseProps {
  purchase: Purchase;
}

export default function Purchase(props: PurchaseProps) {
  const { purchase } = props;
  const navigate = useNavigate();

  const handleOnClickOnBook = (event: React.MouseEvent<HTMLAnchorElement>, bookId: number): void => {
    event.preventDefault();
    navigate(`/books/${bookId}`);
  };

  return (
    <StyledPurchase>
      <div className="purchase-order-summary">
        <div className="purchase-header">
          <h1>Order Summary</h1>
          <span id="order-date">{formatDate(purchase.date)}</span>
        </div>
        <div className="summary-details">
          <p>
            Order Number: <span id="order-number">{`BO-000${purchase.id}`}</span>
          </p>
          <p>
            Items: <span id="items-count">{purchase.books.length}</span>
          </p>
          <p>
            Total: <span id="total-count">{formatAsCurrency(purchase.total)}</span>
          </p>
        </div>
      </div>
      {purchase.books.map(({ coverUrl, title, price, id, author }) => (
        <div key={`${purchase.id}_${id}`} className="card horizontal-card">
          <a
            href="#"
            id={`link-${purchase.id}_${id}`}
            role="button"
            aria-label="Link to book detail"
            onClick={(event) => handleOnClickOnBook(event, id)}
          >
            <img className="card-img-left" src={coverUrl} alt={title} />
          </a>
          <div className="card-body">
            <small>{author}</small>
            <h5 className="card-title">{title}</h5>
            <p className="card-price">{formatAsCurrency(price)}</p>
          </div>
        </div>
      ))}
    </StyledPurchase>
  );
}
