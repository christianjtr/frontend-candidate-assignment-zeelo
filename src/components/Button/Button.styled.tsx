import styled from 'styled-components';

const StyledButton = styled.button`
  width: fit-content;
  min-width: 80px;
  height: 40px;
  gap: 8px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  border-radius: 8px;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.orange} 10%,
    ${(props) => props.theme.colors.pink} 100%
  );

  color: white;
  font-size: ${(props) => props.theme.fontSizes.sm}px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px rgba(33, 33, 33, 0.5);
    transition: box-shadow 300ms;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default StyledButton;
