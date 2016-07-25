import { combineReducers } from 'redux';

import postLatestReducer from './postLatestReducer';

const postReducer = combineReducers({
  latest: postLatestReducer,
});

export default postReducer;