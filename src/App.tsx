import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppListPage, NavBar } from './components';

export const App = () => (
  <Provider store={store}>
    <NavBar />
    <div
      style={{
        maxWidth: '1012px',
        margin: '0 auto'
      }}
    >
      <AppListPage />
    </div>
  </Provider>
);
