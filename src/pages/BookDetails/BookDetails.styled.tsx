import styled from 'styled-components';

export const StyledBookDetails = styled.div`
  .card {
    box-shadow:
      0 0px 1px rgba(0, 0, 0, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 300px 1fr;
    margin-bottom: 30px;
    position: relative;
    max-height: 300px;

    .ribbon {
      font-size: ${(props) => props.theme.fontSizes.md}px;
      font-weight: 600;
      color: #fff;
    }
    .ribbon {
      --f: 0.5em;
      --r: 0.8em;

      position: absolute;
      top: 20px;
      right: calc(-1 * var(--f));
      padding-inline: 0.25em;
      line-height: 1.8;
      background: ${(props) => props.theme.colors.pink};
      border-bottom: var(--f) solid #0005;
      border-left: var(--r) solid #0000;
      clip-path: polygon(
        var(--r) 0,
        100% 0,
        100% calc(100% - var(--f)),
        calc(100% - var(--f)) 100%,
        calc(100% - var(--f)) calc(100% - var(--f)),
        var(--r) calc(100% - var(--f)),
        0 calc(50% - var(--f) / 2)
      );
    }

    .card-image {
      display: flex;
      flex-direction: column;
      margin: 0;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: auto;
        flex-grow: 1;
        object-fit: contain;
      }
    }

    .card-body {
      display: flex;
      flex-flow: column wrap;
      padding: 30px;

      .card-pre-heading {
        color: ${(props) => props.theme.colors.grey2};
        font-size: ${(props) => props.theme.fontSizes.md}px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 10px 0;
      }

      .card-title {
        font-size: ${(props) => props.theme.fontSizes.xl}px;
        font-weight: 800;
      }

      .card-description {
        font-size: ${(props) => props.theme.fontSizes.md}px;
        margin: 20px 0px;
      }

      .card-chips-container {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        align-self: flex-start;
        margin-top: auto;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .card {
      grid-template-columns: 1fr;
    }
  }
`;
