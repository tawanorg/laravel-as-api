import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import history from './history';
import App from './containers/App';
import configureStore from './configureStore';

// Create redux store
const initialState = {};

const store = configureStore(initialState, history);


if (document.getElementById('root')) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
}
