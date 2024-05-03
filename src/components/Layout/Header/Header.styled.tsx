import styled from 'styled-components';

export const StyledHeader = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg}px;
  font-weight: 800;

  .header {
    top: 0;
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
  }

  .link-to-home {
    display: flex;
    align-items: center;
    width: fit-content;
    text-decoration: none;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.orange} 1%,
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
    padding: 10px;
  }

  .user-profile-wrapper {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    & img.image--cover {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.colors.grey3};

      object-fit: cover;
      object-position: center right;

      &:hover {
        border-color: ${(props) => props.theme.colors.orange};
        transition: border-color 500ms;
      }
    }
  }
`;
