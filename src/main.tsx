import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubscryptsProvider } from '@subscrypts/react-sdk';
import '@subscrypts/react-sdk/styles';
import './styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SubscryptsProvider
      enableWalletManagement={true}
      network="arbitrum"
      balanceRefreshInterval={30000}
      debug="debug"
    >
      <App />
    </SubscryptsProvider>
  </React.StrictMode>
);
