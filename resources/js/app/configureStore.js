/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import allSagas from './sagas';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(allSagas)

  return store;
}
