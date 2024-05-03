import styled from 'styled-components';

export const StyledBookCard = styled.div`
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .book-card {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;

    figure {
      margin: 0;
      padding: 30px 0px;
      transition: transform 0.2s; /* Animation */
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }

    h2 {
      margin-bottom: 5px;
      color: ${(props) => props.theme.colors.dark};
      font-size: ${(props) => props.theme.fontSizes.lg}px;
      font-weight: 600;
    }

    p.author {
      margin-bottom: 10px;
      display: block;
      font-size: ${(props) => props.theme.fontSizes.sm}px;
      color: ${(props) => props.theme.colors.grey2};
    }
    a {
      margin-top: auto;
      text-decoration: none;
      font-weight: 600;
      line-height: 1;
      color: ${(props) => props.theme.colors.orange};
    }

    a:hover {
      color: color-mix(in srgb, ${(props) => props.theme.colors.orange} 70%, white);
    }

    .card-content {
      padding: 20px;
    }

    .price {
      display: block;
      font-weight: 600;
      margin-bottom: 10px;
      font-size: ${(props) => props.theme.fontSizes.lg}px;
    }
  }

  .book-card:hover {
  }

  @media screen and (max-width: 425px) {
    .book-card {
      img {
        width: 100%;
        height: 400px;
      }
    }
  }
`;
