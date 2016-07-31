import config from 'shared/configs';

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from 'shared/store/createStore'
import createRoutes from 'shared/routes'
import { DevTools } from 'shared/components';

export default class Root extends Component {
  render() {
    const { history } = this.props;
    const store = createStore(history);

    if (!config.isProduction) {
      return (
        <Provider store={store} key='provider'>
          <div>
            <Router 
              history={syncHistoryWithStore(history, store)}
              routes={createRoutes(store, history)} />
            <DevTools /> 
          </div>
        </Provider>
      )
    }

    return (
      <Provider store={store} key='provider'>
        <Router 
          history={syncHistoryWithStore(history, store)}
          routes={createRoutes(store, history)} />
      </Provider>
    )
  }
}
