import config from 'shared/configs';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from 'shared/store/createStore';
import createRoutes from 'shared/routes';

class Root extends Component {
  render() {
    const { history } = this.props;
    const store = createStore(history, window.__INITIAL_STATE__);

    return (
      <Provider store={store} key="provider">
        <Router 
          history={syncHistoryWithStore(history, store)}
          routes={createRoutes(store)} />
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root;