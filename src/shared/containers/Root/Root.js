import config from 'shared/configs';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

class Root extends Component {
  render() {
    const { store, history, routes } = this.props;
    
    return (
      <Provider store={store} key="provider">
        <Router 
          history={history}
          routes={routes} />
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root;