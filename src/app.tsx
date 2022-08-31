import React from 'react';

import { PendingProducers } from './pages';
import { GlobalStyle } from './styles';

export const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <PendingProducers />
    </>
  );
};