import styled from 'styled-components';

export const StyledPurchaseStats = styled.div`
  .stats-card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    * {
      display: block;
    }

    span {
      font-weight: 600;
    }
  }
  h5 {
    font-weight: 600;
    margin: 20px 0px;
  }

  /* Container for the entire table */
  .table-container {
    display: block;
    width: 100%;
    border-collapse: collapse;
    font-size: ${(props) => props.theme.fontSizes.sm}px;
  }

  /* Table body */
  .table-body {
    padding: 10px;
  }

  /* Table rows */
  .table-row {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }

  /* Cells within each row */
  .genre-cell,
  .total-cell {
    flex: 1;
    padding: 5px;
  }

  .aling--right {
    text-align: right;
  }
`;
