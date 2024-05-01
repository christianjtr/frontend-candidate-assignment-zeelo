import styled from 'styled-components';

export const StyledBookCard = styled.div`
  --img-scale: 1;

  position: relative;
  border-radius: 16px;
  background: white;
  overflow: hidden;

  h2 {
    margin: 0 0 18px 0;
    color: ${(props) => props.theme.colors.dark};
  }

  figure {
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    transform: scale(var(--img-scale));
  }

  .card-body {
    padding: 16px;
  }
`;
