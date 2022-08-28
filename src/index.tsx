import React from 'react';
import ReactDOM from 'react-dom/client';
import { PendingProducers } from './pages';
import { RootLayout } from './pages/layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RootLayout>
      <PendingProducers />
    </RootLayout>
  </React.StrictMode>,
);
