import styled from 'styled-components';

interface BodyProps {
  fontSize?: FontSize;
}

export const Body = styled.div<BodyProps>`
  font-size: ${(props) => props.theme.fontSizes[props.fontSize ?? 'md']}px;
  font-weight: 400;
  max-width: 95ch;
  margin: auto;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;
