import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import 'shared/theme/scss/modules/_fonts.scss';
import 'shared/theme/scss/app.scss';

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
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;