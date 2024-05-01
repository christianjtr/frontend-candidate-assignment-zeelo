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

  /* .chips {
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    // hide scrollbars chrome / IE10+ & Edge
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -ms-overflow-style: none;
  } */
`;
