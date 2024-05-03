import { Link } from 'react-router-dom';
import { Title, Subtitle, PageHeader, LoaderSpinner } from '@components';
import { useFetchPurchases } from '@hooks/useFetchPurchases';
import { PurchaseHistory, PurchaseStats } from './components';
import { StyledProfile } from './Profile.styled';

export default function Profile() {
  const { purchases, isLoading: isLoadingPurchases } = useFetchPurchases();

  const purchasedBooks = purchases
    .map((purchase) => {
      return purchase.books;
    })
    .flat();

  if (isLoadingPurchases) return <LoaderSpinner />;

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
      <Subtitle>Hi there, here is your purchase summary.</Subtitle>
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
