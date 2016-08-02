import config from 'shared/configs';

import { createStore, applyMiddleware, compose } from 'redux';

import apiMiddleware from 'shared/middlewares/apiMiddleware';
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger';

import rootReducer from 'shared/reducer';

const middlewares = [
  apiMiddleware, 
  routerMiddleware(history)
];

if (!config.isProduction) {
  middlewares.push(createLogger());
}

let enhancer = applyMiddleware(...middlewares);

export default (history, initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )
  if (module.hot) {
    module.hot.accept('shared/reducer', () => {
      System.import('shared/reducer').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }
  return store
}
