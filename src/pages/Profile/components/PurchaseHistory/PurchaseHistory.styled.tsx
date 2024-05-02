import styled from 'styled-components';

export const StyledPurchaseHistory = styled.div`
  .purchase-order-summary {
    background-color: ${(props) => props.theme.colors.grey5};
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
  }

  .purchase-order-summary h1 {
    font-size: ${(props) => props.theme.fontSizes.md}px;
    font-weight: 500;
    margin: 5px 0;
  }

  .purchase-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    span {
      font-size: ${(props) => props.theme.fontSizes.sm}px;
    }
  }

  .summary-details {
    display: flex;
    justify-content: space-between;
  }

  .summary-details p {
    font-size: ${(props) => props.theme.fontSizes.sm}px;
  }

  .summary-details span {
    font-weight: bold;
  }

  .card.horizontal-card {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
  }

  .card-img-left {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 15px;
    object-fit: contain;
  }

  .card-body {
    flex-grow: 1;
  }

  .card-title {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
  }

  .card-price {
    font-size: 14px;
    color: #333;
    margin-bottom: 0;
  }
`;
