import React from 'react';
import { Header } from './components';

import { PendingProducers } from './pages';
import { GlobalStyle } from './styles';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <PendingProducers />
    </div>
  );
};
