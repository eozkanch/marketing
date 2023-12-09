// index.js veya App.js
import "./styles/styles.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';
import { store, persistor } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>
);
