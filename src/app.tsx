import React from 'react';
import { Header, Toast } from './components';

import { Producers } from './pages';
import { GlobalStyle } from './styles';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <Toast />
      <Header />
      <Producers />
    </div>
  );
};
