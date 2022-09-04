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
  h1, h2, h3, h4, h5, h6, p, span {
    color: ${colorSystem.basic.black};
    font-family: work-sans, sans-serif;
    font-style: normal;
    font-weight: ${fontSystem.weight.medium};
  }

  button, a {
    cursor: pointer;
    user-select: none;
    font-weight: ${fontSystem.weight.semibold};
  }
`;
