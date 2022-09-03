import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button, select,
  h1, h2, h3, h4, h5, h6, p, span {
    font-family: work-sans, sans-serif;
    font-style: normal;
    font-weight: 500;
  }
`;
