import styled from 'styled-components';

export const StyledAddNewBookForm = styled.div`
  width: 65%;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.lg}px;
    font-weight: 600;
    margin: 20px 0px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.orange};
  }

  textarea {
    resize: none;
    min-height: 150px;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-field {
    margin: 10px 0px;

    legend {
      color: ${(props) => props.theme.colors.grey1};
      font-size: ${(props) => props.theme.fontSizes.sm}px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
