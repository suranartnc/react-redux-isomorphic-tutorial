import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'shared/reducer';
import apiMiddleware from 'shared/middlewares/apiMiddleware';
import DevTools from 'shared/components/DevTools';

const enhancer = compose(
  applyMiddleware(apiMiddleware),
  DevTools.instrument()
);

export default function(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}