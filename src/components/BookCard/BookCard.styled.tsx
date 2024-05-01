import styled from 'styled-components';

export const StyledBookCard = styled.div`
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  figure {
    margin: 0;
    padding: 0;
    display: flex;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    flex-grow: 1;
    object-fit: cover;
  }

  /* &:hover {
    transform: translateY(-10px) scale(1.005) translateZ(0);
    transition: transform 400ms;
  } */

  .card-body {
    padding: 20px;
    min-height: 150px;
    max-height: 300px;
    display: flex;
    flex-direction: column;

    .card-price {
      display: block;
      font-weight: 600;
      margin-bottom: 10px;
      font-size: ${(props) => props.theme.fontSizes.lg}px;
      /* color: ${(props) => props.theme.colors.pink}; */
    }

    .card-pre-header {
      display: block;
      font-size: ${(props) => props.theme.fontSizes.sm}px;
      color: ${(props) => props.theme.colors.grey2};
    }

    h2 {
      margin: 5px 0px;
      color: ${(props) => props.theme.colors.dark};
      font-size: ${(props) => props.theme.fontSizes.md}px;
      font-weight: 800;
    }

    a {
      margin-top: auto;
      text-decoration: none;
      color: ${(props) => props.theme.colors.orange};
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
