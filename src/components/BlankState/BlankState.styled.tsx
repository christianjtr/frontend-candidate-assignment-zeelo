import styled from 'styled-components';

export const StyledBlankState = styled.div`
  .blank-state {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 30px;

    img {
      width: 50%;
      margin: auto;
    }

    .message {
      font-size: ${(props) => props.theme.fontSizes.lg}px;
      color: ${(props) => props.theme.colors.pink};
      font-weight: 600;
    }
  }
`;
