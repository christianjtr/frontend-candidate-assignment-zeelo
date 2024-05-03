import styled from 'styled-components';

export const StyledBookDetails = styled.div`
  .card {
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 300px 1fr;
    margin-bottom: 30px;
    position: relative;
    max-height: 500px;

    .card-image {
      padding: 20px;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 300px;
        object-fit: contain;
      }
    }

    .card-body {
      display: flex;
      flex-flow: column wrap;
      padding: 30px;

      .card-pre-heading {
        color: ${(props) => props.theme.colors.grey2};
        font-size: ${(props) => props.theme.fontSizes.md}px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 10px 0;
      }

      .card-title {
        font-size: ${(props) => props.theme.fontSizes.xl}px;
        font-weight: 800;
      }

      .card-price {
        color: ${(props) => props.theme.colors.pink};
        font-size: ${(props) => props.theme.fontSizes.lg}px;
        font-weight: 600;
      }

      .card-description {
        font-size: ${(props) => props.theme.fontSizes.md}px;
        margin: 20px 0px;
      }

      .card-chips-container {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        align-self: flex-start;
        margin-top: auto;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .card {
      grid-template-columns: 1fr;
      max-height: fit-content;
    }
  }
`;
