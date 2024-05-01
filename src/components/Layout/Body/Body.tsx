import styled from 'styled-components';

interface BodyProps {
  fontSize?: FontSize;
}

export const Body = styled.div<BodyProps>`
  font-size: ${(props) => props.theme.fontSizes[props.fontSize ?? 'md']}px;
  font-weight: 400;
  max-width: 100ch;
  margin: auto;
`;
