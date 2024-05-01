import styled from 'styled-components';

export const StyledBookCard = styled.div`
  --img-scale: 1;
  --title-color: black;

  position: relative;
  border-radius: 16px;
  background: white;
  overflow: hidden;

  h2 {
    margin: 0 0 18px 0;
    color: var(--title-color);
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

  .body {
    padding: 16px;
  }
`;
