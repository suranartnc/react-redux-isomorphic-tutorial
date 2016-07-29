import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'shared/routes';

import { Provider } from 'react-redux';
import createStore from 'shared/store/createStore';

const store = createStore();

import { DevTools } from 'shared/components';

ReactDOM.render(
  <Provider store={store}>
  	<div>
  		<Router history={syncHistoryWithStore(browserHistory, store)} routes={routes} />
    	<DevTools />
  	</div>
  </Provider>, 
  document.getElementById('root'));