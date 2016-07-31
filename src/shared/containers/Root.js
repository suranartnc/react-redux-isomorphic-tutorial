import config from 'shared/configs';

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from 'shared/store/createStore'
import routes from 'shared/routes'
import { DevTools } from 'shared/components';

export default class Root extends Component {
  render() {
    const { history, initialState } = this.props
    const store = createStore(history, initialState)

    if (!config.isProduction) {
      return (
        <Provider store={store} key='provider'>
          <div>
            {routes(store, history)}
            <DevTools /> 
          </div>
        </Provider>
      )
    }

    return (
      <Provider store={store} key='provider'>
        {routes(store, history)}
      </Provider>
    )
  }
}
