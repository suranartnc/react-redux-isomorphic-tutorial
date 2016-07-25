import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'shared/reducer';
import apiMiddleware from 'shared/middlewares/apiMiddleware';

const enhancer = compose(
  applyMiddleware(apiMiddleware)
);

export default function(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}