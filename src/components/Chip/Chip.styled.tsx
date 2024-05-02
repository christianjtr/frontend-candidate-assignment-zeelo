import styled from 'styled-components';

export const StyledChip = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.md}px;
  line-height: 1.4;
  white-space: nowrap;
  color: white;
  background: ${(props) => props.theme.colors.orange};
  border-radius: 25px;
  margin-right: 8px;
  padding: 5px 12px;
  max-height: 32px;
  text-transform: capitalize;
`;
