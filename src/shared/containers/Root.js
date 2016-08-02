import config from 'shared/configs';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from 'shared/store/createStore';
import createRoutes from 'shared/routes';

export default class Root extends Component {
  render() {
    const { history } = this.props;
    const store = createStore(history);

    return (
      <Provider store={store} key='provider'>
        <Router 
          history={syncHistoryWithStore(history, store)}
          routes={createRoutes(store)} />
      </Provider>
    )
  }
}
