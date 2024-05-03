import styled from 'styled-components';

export const StyledBooks = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: white;
    border-collapse: collapse;
    grid-gap: 1px;

    > div {
      --grid-border: 1px solid ${(props) => props.theme.colors.grey4};
      outline: var(--grid-border);
    }
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
