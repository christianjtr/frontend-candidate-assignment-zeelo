import styled from 'styled-components';

export const StyledBooks = styled.div`
  --gap: 20px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: var(--gap);
    row-gap: var(--gap);
    padding: 20px;
  }

  @media screen and (max-width: 425px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
