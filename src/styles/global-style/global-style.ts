import { createGlobalStyle } from 'styled-components';
import { colorSystem } from '../color-system';
import { fontSystem } from '../font-system';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button, select,
  h1, h2, h3, h4, h5, h6, p, span, li {
    color: ${colorSystem.basic.black};
    font-family: Inter, -apple-system, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: ${fontSystem.weight.medium};
  }

  button {
    background-color: ${colorSystem.basic.white};

  }

  button, a {
    cursor: pointer;
    user-select: none;
    font-family: Inter, -apple-system, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: ${fontSystem.weight.semibold};
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colorSystem.basic.grey};
  }

`;
