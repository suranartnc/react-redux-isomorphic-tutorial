import { createStore } from 'redux';

import rootReducer from 'shared/reducer';

export default function(initialState = {}) {
  const store = createStore(rootReducer, initialState);
  return store;
}