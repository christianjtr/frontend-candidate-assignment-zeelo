import styled from 'styled-components';

export const StyledProfile = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 350px;
    column-gap: 20px;
    margin-top: 30px;
  }

  .purchase-container,
  .profile-container,
  .stats-container {
    padding: 20px;
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.lg}px;
    font-weight: 600;
    margin: 10px 0px;
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
