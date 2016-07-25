import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router } from 'react-router';
import routes from 'shared/routes';

import { Provider } from 'react-redux';
import createStore from 'shared/store/createStore';

const store = createStore();

import DevTools from 'shared/components/DevTools';

ReactDOM.render(
  <Provider store={store}>
  	<div>
  		<Router history={browserHistory} routes={routes} />
    	<DevTools />
  	</div>
  </Provider>, 
  document.getElementById('root'));