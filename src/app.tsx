import React from 'react';
import { Header, Toast } from './components';

import { PendingProducers } from './pages';
import { GlobalStyle } from './styles';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <Toast />
      <Header />
      <PendingProducers />
    </div>
  );
};
