import styled from 'styled-components';

export const StyledBooks = styled.div`
  --gap: 20px;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--gap);
    row-gap: var(--gap);
    padding: 20px;
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
