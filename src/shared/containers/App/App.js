import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import 'shared/theme/scss/app.scss';

import Header from 'shared/containers/App/Header/Header';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
            title="React Redux Isomorphic Tutorial"
        />
        <Header />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;