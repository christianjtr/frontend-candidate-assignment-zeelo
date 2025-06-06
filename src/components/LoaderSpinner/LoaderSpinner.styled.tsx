import styled from 'styled-components';

export const StyledLoaderSpinner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  align-items: center;
  gap: 10px;
  height: 100vh;
  margin: auto;
  left: 0;
  right: 0;

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: ${(props) => props.theme.colors.orange};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
