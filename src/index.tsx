import React from 'react';
import ReactDOM from 'react-dom/client';
import { PendingProducers } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <main style={{ boxSizing: 'border-box', margin: 0, padding: 0 }}>
      <PendingProducers />
    </main>
  </React.StrictMode>,
);
