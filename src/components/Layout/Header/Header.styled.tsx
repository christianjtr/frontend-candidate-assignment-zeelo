import styled from 'styled-components';

export const StyledHeader = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg}px;
  font-weight: 800;

  .header {
    top: 0;
    width: 100%;
    position: sticky;
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    background-color: white;
    z-index: 1;
  }

  .link-to-home {
    display: flex;
    align-items: center;
    width: fit-content;
    text-decoration: none;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.orange} 10%,
      ${(props) => props.theme.colors.pink} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    img.logo {
      max-width: 20%;
    }

    span {
      width: 100%;
    }

    img + span {
      margin-left: 10px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`;
