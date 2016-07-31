import config from 'shared/configs';

import { createStore, applyMiddleware, compose } from 'redux';

import { routerMiddleware } from 'react-router-redux'
import apiMiddleware from 'shared/middlewares/apiMiddleware';
import rootReducer from 'shared/reducer';
import { DevTools } from 'shared/components';

const middlewares = [
  apiMiddleware, 
  routerMiddleware(history)
];

let enhancer = applyMiddleware(...middlewares);

if (!config.isProduction) {
  enhancer = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  );
}

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
