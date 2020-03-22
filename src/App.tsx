import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { AppListPage, AppReleaseNotesPage, NavBar } from './components';

export const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <div
        style={{
          maxWidth: '1012px',
          margin: '0 auto'
        }}
      >
        <Switch>
          <Route path="/app/:id">
            <AppReleaseNotesPage />
          </Route>
          <Route path="/">
            <AppListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);
