import styled from 'styled-components';
import WaveSVG from '@assets/wave.svg';

export const StyledNewBook = styled.div`
  .form-container {
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .waves {
    background-image: url(${WaveSVG});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
