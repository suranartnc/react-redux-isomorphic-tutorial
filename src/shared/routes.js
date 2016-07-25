import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'shared/containers/App';
import HomePage from 'shared/containers/HomePage';

export default (
	<Route path='/' component={App}>
	  <IndexRoute component={HomePage} />
	</Route>
);