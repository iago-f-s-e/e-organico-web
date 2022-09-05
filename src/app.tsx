import React from 'react';

import { PendingProducers } from './pages';
import { GlobalStyle } from './styles';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <PendingProducers />
    </div>
  );
};
