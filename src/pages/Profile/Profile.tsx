import { Link } from 'react-router-dom';
import { Title, PageHeader } from '@components';
import { useFetchPurchases } from '@hooks/useFetchPurchases';
import { PurchaseHistory, PurchaseStats } from './components';
import { StyledProfile } from './Profile.styled';

export default function Profile() {
  const { purchases, isLoading: isLoadingPurchases, hasError: hasErrorFetchingPurchases } = useFetchPurchases();

  const purchasedBooks = purchases
    .map((purchase) => {
      return purchase.books;
    })
    .flat();

  return (
    <StyledProfile>
      <PageHeader>
        <div className="grouped-elements">
          <Link className="go-back" to={'/'}>
            Home
          </Link>
          <Title>My purchases</Title>
        </div>
      </PageHeader>
      <div className="grid-container">
        <div className="purchase-container">
          <h3>Purchases</h3>
          {purchases.map((purchase) => (
            <PurchaseHistory key={purchase.id} purchase={purchase} />
          ))}
        </div>
        <div>
          <div className="stats-container">
            <h3>Stats</h3>
            <PurchaseStats purchasedBooks={purchasedBooks} />
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}
